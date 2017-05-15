const argv = require('yargs').argv;

process.title = "Connect Cast frontend Deamon"
process.env.NODE_ENV = argv.env;

const mainfile = "./server/index.js";

switch(argv.env){
  case "develop":
    require(mainfile);
  break;
  case "production":
    pm2Bootstrap()
  break;
}


function pm2Bootstrap(){
  const pm2 = require("pm2");
  const os = require("os");

  pm2.connect(function(err) {
    if (err) {
      console.error(err);
      process.exit(2);
    }
    
    pm2.start({
      script    : './server/index.js',
      exec_mode : 'cluster',
      instances : os.cpus().length,
      max_memory_restart : '100M'
    },
    (err, apps)=> {
      pm2.disconnect();
      if(err){throw err};
    });
  });
}