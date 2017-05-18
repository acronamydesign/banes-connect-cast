var YouTube = require('youtube-node');
var youTube = new YouTube();

module.exports = function(data,params,conf,cb){
	//Unique:
	//is to be handled in a unique or shared fashion?
	//if true then this is unique
	//else if false then this is shared
	youTube.setKey(conf.youtubeApiKey);

console.log('..................................................')
console.log('[Step 1: getting data from Drupal nodes]')
console.log('...................................................')
console.log(' ')

	var data = JSON.parse(data),
			targetAudience = params.audience||'public',
			feeds = [],
			util = require('util'),
			colors = require('colors')

	console.log('Druapl sent data for '+params.location)
	console.log( util.inspect(data, {showHidden:false,depth:null} ) )
	console.log(' ')

	var sanitized = data.map((chunk)=>{

		var cleanObj = {
			nid:chunk.nid,
			title:chunk.title,
			view_mode:chunk.view_mode,
			vicinity:chunk[params.location.split('-').join('_')+'_vicinities'],
			audience:chunk.audience,
		}


		function prop(str){
			if(chunk.hasOwnProperty(str)){
				return true
			}
			else{
				return false
			}
		}
		function viewMode(id){
			if(chunk.view_mode===id){
				return true
			}
			else{
				return false
			}
		}
		//conditional values

		//##Videos
		if(prop('video_url')&&viewMode('video')){
			cleanObj.video_url = chunk.video_url;
			var videoUrl = chunk.video_url.replace("https://youtu.be/",""),
				videoResponse = new Promise((resolve,reject)=>{
			 	youTube.getById(videoUrl, function(error, result) {
			 		if (error) {
			 			console.log(error);
						cleanObj.videoResponse = false;
			 		}
			 		else {
						resolve(result)
			 		}
			 	});
			 })
			 cleanObj.video = videoResponse;
		}
		else if(viewMode('video')&&!prop('video_url')){
			cleanObj = false //nulify broken video view
		}

		//##Content?
		if(chunk.content.length>0){
			//split the content up every parSplit
			var parSplit = 650,
					s = chunk.content,
					a = new Array(),
					i = parSplit;
			do {
					a.push(s.substring(0, i));
			} while((s = s.substring(i, s.length)) != "");
			//first item
			a[0] = a[0]
			//everything else
			for(i in a){
				if(i>0){
					a[i] = '- '+a[i]
				}
			}
			cleanObj.content = a
			cleanObj.len = cleanObj.content.length

		}
		//is article but no content
		else if(viewMode('article')&&!prop('content')||viewMode('article')&&chunk.content.length===0){
			cleanObj = false
		}

		//##Images
		if(viewMode('advert_image')){
			var src = chunk['bg-image'].split(' ').filter(function(item){
				if(/src=/g.test(item)){
					return item
				}
			})[0]
			cleanObj.bgimage = src.replace(/"/g,'').replace('src=','')
		}
		if(viewMode('article')){
			if(prop('image')&&typeof chunk.image === 'string'){
				cleanObj.image = chunk.image
			}
		}
		if(viewMode('feed')&&prop('feed_url')&&typeof chunk.feed_url === 'string'){
			cleanObj.feed_url = chunk.feed_url
			feeds.push({nid:chunk.nid,url:cleanObj.feed_url,content:null})
		}

		//##Extras
		if(chunk.bg_color.length>0){
			var matchColor = chunk.bg_color.match(/background-color:([^}]*);/)
			cleanObj.bgcolor = matchColor[1]
		}

		if(cleanObj.audience===targetAudience||cleanObj.audience==='everyone'){
			//nothing to do at the moment, may need to add to it
		}
		else{
			cleanObj = false
		}

		console.log('[Cleened data for '+params.location+' : filter_vicinity.js]', util.inspect(cleanObj,{showHidden:false,depth:null}))
		console.log(' ')
		return cleanObj

	})

	
	console.log('Feeds content',feeds)
	console.log('Standard content',sanitized)

	if(cb) cb(sanitized.filter(Boolean),feeds)

}
