module.exports = function(feed){

	if(/bathnes/g.test(feed.url)){
		feed.type = 'banes'
	}
	else{
		feed.type = 'external'
	}

	if(feed.hasOwnProperty('content')&&typeof feed.content === 'string'){
		var parsed = JSON.parse(feed.content),
				tmpArr = []

		parsed.nodes.forEach((data)=>{
			var node = data.node

			//clean up image
			node.image = node.field_img.src
			delete node.field_img
			//clean up date published
			node.published = node['Date Published']
			delete node['Date Published']
			//clean up content and split up
			var parSplit = 650,
					s = node.body,
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
			node.body = a
			node.len = node.body.length
			//end do while

			tmpArr.push(node)
		})

		feed.content = tmpArr

		return feed
	}

}
