import {Request} from "express";
import * as url from "url";

/**
 * Usefull string helpers 
*/
export const stringFunctions = {
    capitalize(str:string){
        return str.charAt(0).toUpperCase() + str.slice(1)
    },
    hyphanate(str:string){
        return str.replace(/_/g,"-");
    }
}

/**
 * Usefull route misc helpers 
*/
export function routeHelper(data){
    const helper = {
        find(prop,val){
            return data.filter(cbdata=>{
			    return cbdata[prop]==val
		    })
        },
        data:data,
        ...stringFunctions
    }
    return helper;
}

export function hasQueryString(req:Request){
    return Object.keys(url.parse(req.url, true).query).length>0;
}

export function hypertextProtocal(str:string,protocal:"http://"|"https://"){
    if(new RegExp(protocal,"g").test(str)){
        return str;
    }
    else{
        return protocal+str
    }
}