module.exports = function(data){

String.prototype.capitalize = function() {
	return this.charAt(0).toUpperCase() + this.slice(1);
}

	var $ = {}

	$.find = function(prop,val){
		return data.filter(function($data){
			return $data[prop]==val
		})
	}

	Object.defineProperty($, "data", { get: function () { return data } });

	$.debug = function(m){
		if(m==='data'){
			console.log(data)
		}
		else{
			console.log($)
		}
	}

	return $
}
