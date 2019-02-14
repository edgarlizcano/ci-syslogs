let Logg = require("../Logger").Logger;
let facility = Logg.Facilities;
let severity = Logg.Severities;
var Log = new Logg("127.0.0.1", facility.Billetero);
let i = 0;
    setInterval(()=>{
        i++;
        Log.WriteLog("Probando test machine Debug"+i, severity.Debug);
        Log.WriteLog("Probando test machine Alert"+i, severity.Alert);
        Log.WriteLog("Probando test machine Critical"+i, severity.Critical);
        Log.WriteLog("Probando test machine Emergency"+i, severity.Emergency);
    },2000);
