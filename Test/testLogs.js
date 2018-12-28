let Logg = require("../Logger").Logger;
let facility = Logg.Facilities;
let severity = Logg.Severities;

var Log = new Logg("127.0.0.1", facility.Machine);

Log.WriteLog("Probando test machine", severity.Alert);