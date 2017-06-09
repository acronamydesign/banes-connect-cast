import * as YouTube from "youtube-node";
import * as isUrl from "is-url";

//init youtube api
const youTube = new YouTube();
youTube.setKey("AIzaSyAY7gaLqRDIudk4KesUmQNBuBZLjooTkRw");

export interface YoutubeResolve{
    duration:number;
    id:string;
}

export async function loadYoutubeVideo( url ){

    console.log("Requesting video for "+ url);

    return new Promise((resolve,reject)=>{
        if(isUrl(url)){
            //Endpoint data
            let videoId = url.split("/").pop();
            youTube.getById(videoId, function(err, result){
                if(err){
                    console.log(err)
                    resolve(false);
                }
                else{
                    function YTDurationToSeconds(duration) {
                        var match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/)

                        var hours = (parseInt(match[1]) || 0);
                        var minutes = (parseInt(match[2]) || 0);
                        var seconds = (parseInt(match[3]) || 0);

                        return hours * 3600 + minutes * 60 + seconds;
                    }
                    let ms = YTDurationToSeconds(result.items[0].contentDetails.duration) * 1000
                    resolve(({duration:ms, id:videoId} as YoutubeResolve));
                }
            })
        }
        else{
            resolve(false)
        }
    })
    .catch(err=>{
        if(err){
            console.log(err);
        }
    })

}
