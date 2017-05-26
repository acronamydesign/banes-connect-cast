const argv = require('yargs').argv;
const path = require("path");

process.title = "Connect Cast frontend Deamon"
process.env.NODE_ENV = argv.env;

const mainfile = "./server/index.js";


switch(argv.env){
  case "develop":
    require(mainfile);
  break;
  case "production":
    console.log("bootstrap PM2")
    pm2Bootstrap()
  break;
}


function pm2Bootstrap(){
  const pm2 = require("pm2");
  const os = require("os");

  pm2.connect(function(err) {
    console.log("PM2 connected")
    if (err) {
      console.log("PM2 Error")
      console.error(err);
      process.exit(2);
    }
    
    console.log("PM2 Starting")
    pm2.start({
      name      : 'connect-cast-server',
      args      : "--env=production", 
      script    : "./server/index.js",
      exec_mode : 'cluster',
      watch     : true,
      instances : os.cpus().length,
      max_memory_restart : '100M'
    },
    (err, apps)=> {
      pm2.disconnect();
      if(err){throw err};
    });
    console.log("PM2 Running")
    pm2.list(function(err, processDescriptionList){
      console.log(processDescriptionList.map(instance=>instance.name))
    })
  });
}