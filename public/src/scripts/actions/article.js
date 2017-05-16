(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = function($,Reveal){

	var timer;

	function revealObserver(sel,cb){
		// select the target node
		$(sel).each(function(){
			var target = $(this)[0],
					jqTarget =$(this)
			// create an observer instance
			var observer = new MutationObserver(function(mutations) {
				for(i in mutations){
					if(mutations[i].attributeName==='class'){
						var classList = mutations[i].target.classList
						for(x in classList){
							if(/present/g.test(classList[x])){
								cb(jqTarget)
								return
							}
						}
					}
				}
			});
			// configuration of the observer:
			var config = {
				attributes: true,
				childList: false,
				characterData: false
			};
			// pass in the target node, as well as the observer options
			observer.observe(target, config);
		})
	}

	//init only if first
	function switchBg(target){
		$('body').css({backgroundColor:'#fff'})
	}

	if($('.slide-background .article').hasClass('present')){
		switchBg($('.slides .article'))
	}


	//when video
	revealObserver('.slides .article',function(target){
		switchBg(target)
	})//video observer end

}

},{}]},{},[1])