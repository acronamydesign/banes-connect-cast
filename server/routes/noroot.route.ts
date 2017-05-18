import * as url from "url";

export function disableRoot( app, serverConf ){
    app.get('/', (req, res)=>{
        
        const query = url.parse(req.url, true).query;

        res.cookie("location", query.location)
        res.redirect("/app")
    })
    
}