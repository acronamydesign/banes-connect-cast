export function settingsRoute( app, serverConf ){
    app.get('/app/settings', (req, res)=>res.send(serverConf) )
}