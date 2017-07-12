import * as url from "url";

export function disableRoot( app, serverConf ){
    app.get('/bootstrap', (req, res)=>{
        
        const query = url.parse(req.url, true).query;

        res.cookie("location", query.location)
        res.redirect("/app")
    })
	app.get('/app/bootstrap', (req, res)=>{

        const query = url.parse(req.url, true).query;

        res.cookie("location", query.location)
        res.redirect("/app")
    })
    
}
