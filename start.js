const args = require("yargs").argv;
const os = require("os");
const ifaces = os.networkInterfaces();
const spawn = require('child_process').spawn;
const killPort = require("kill-port");
const ip = require("ip");


function webpack(...args){
    //kill livereload
    //killPort(35729).catch(err=>{})
    const webpack = spawn('webpack', ['-w', '--env.develop'].concat(args), {stdio: "inherit"});

    console.log(webpack.spawnargs.join(" "))

    webpack.on('close', (code) => {
        console.log(`Webpack exited with code ${code}`);
    });

    process.on("exit", function(){
        webpack.kill('SIGHUP');
    })
}

function tsc(...args){
    const tsc = spawn('tsc', ['-w', '--project', './server/tsconfig.json'].concat(args));

    console.log(tsc.spawnargs.join(" "))

    tsc.stdout.on('data', (data) => {
        console.log(`Typescript: ${data}`);
    });

    tsc.stderr.on('data', (data) => {
        console.log(`Typescript: ${data}`);
    });

    tsc.on('close', (code) => {
        console.log(`Webpack exited with code ${code}`);
    });

    process.on("exit", function(){
        tsc.kill('SIGHUP');
    })
}

function server(...args){
    //kill server
    //killPort(8080).catch(err=>{})
    const server = spawn('node', ['./index.js'].concat(args));

    console.log(server.spawnargs.join(" "))

    server.stdout.on('data', (data) => {
        console.log(`Server: ${data}`);
    });

    server.stderr.on('data', (data) => {
        console.log(`Server: ${data}`);
    });

    server.on('close', (code) => {
        console.log(`Server exited with code ${code}`);
    });

    process.on("exit", function(){
        server.kill('SIGHUP');
    })
}

//Set HOST
let host = "connectcast.bathnes.gov.uk";
function develop(context){
    if(context==="emulator"){
        webpack(`--env.develop=true`,`--env.host=${ip.address()}`);
        tsc();
        server(`--env=develop`,`--host=${ip.address()}`);
    }
    else if(context==="hardware"){
        webpack(`--env.develop=true`,`--env.host=${host}`);
        tsc();
        server(`--env=develop`,`--host=${host}`);
    }
}

function production(){
    server("--env=production");
}

function deploy(){
    server("--env=production");
}


if(args._.find(env=>env==="develop")){
    console.log("Starting processess with args:")
    if(args.emulator){
        develop("emulator");
    }
    else{
        develop("hardware");
    }
    console.log("\n")
}
else if(args._.find(env=>env==="production")){
    production();
}
else if(args._.find(env=>env==="deploy")){
    console.log("Deploying with PM2 too "+host)
    deploy();
}
else{
    console.log("Help")
    console.log("\n")
    console.log("Run in either develop or production.")
    console.log("see this file for flags")
}