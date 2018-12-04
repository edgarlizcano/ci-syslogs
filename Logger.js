let syslog = require ("syslog-client");

exports.Facility = {
    Billetero: 17, //Local1
    Billing: 18, //Local2
    Logic: 19, //Local3
    Machine: 20, //Local4
    Monedero: 21, //Local5
    Liquidation: 22, //Local6
    Other: 23 //Local7
};

exports.Logger = class Logger {
    constructor(ip, facility){
        let createOptions = {
            transport: syslog.Transport.Udp,
            port: 514
        };
        let client = syslog.createClient(ip, createOptions);
        client.on("error", function(error) {
            console.error(error);
            client.close();
        });
        client.on("close", function() {
            console.log("connection closed");
        });

        this.LogDebug=(message)=>{
            let logOptions = {
                facility: facility,
                severity: syslog.Severity.Debug
            };
            client.log(message, logOptions, function(error) {
                if (error) {
                    console.error(error);
                } else {
                    console.log("Syslog-Debug: "+message);
                }
            })
        }
        this.LogInfo=(message)=>{
            let logOptions = {
                facility: facility,
                severity: syslog.Severity.Informational
            };
            client.log(message, logOptions, function(error) {
                if (error) {
                    console.error(error);
                } else {
                    console.log("Syslog-Info: "+message);
                }
            })
        }
        this.LogNotice=(message)=>{
            let logOptions = {
                facility: facility,
                severity: syslog.Severity.Notice
            };
            client.log(message, logOptions, function(error) {
                if (error) {
                    console.error(error);
                } else {
                    console.log("Syslog-Notice: "+message);
                }
            })
        }
        this.LogWarning=(message)=>{
            let logOptions = {
                facility: facility,
                severity: syslog.Severity.Warning
            };
            client.log(message, logOptions, function(error) {
                if (error) {
                    console.error(error);
                } else {
                    console.log("Syslog-Warning: "+message);
                }
            })
        }
        this.LogError=(message)=>{
            let logOptions = {
                facility: facility,
                severity: syslog.Severity.Error
            };
            client.log(message, logOptions, function(error) {
                if (error) {
                    console.error(error);
                } else {
                    console.log("Syslog-Error: "+message);
                }
            })
        }
        this.LogCritical=(message)=>{
            let logOptions = {
                facility: facility,
                severity: syslog.Severity.Critical
            };
            client.log(message, logOptions, function(error) {
                if (error) {
                    console.error(error);
                } else {
                    console.log("Syslog-Critical: "+message);
                }
            })
        }
        this.LogAlert=(message)=>{
            let logOptions = {
                facility: facility,
                severity: syslog.Severity.Alert
            };
            client.log(message, logOptions, function(error) {
                if (error) {
                    console.error(error);
                } else {
                    console.log("Syslog-Alert: "+message);
                }
            })
        }
        this.LogEmergency=(message)=>{
            let logOptions = {
                facility: facility,
                severity: syslog.Severity.Emergency
            };
            client.log(message, logOptions, function(error) {
                if (error) {
                    console.error(error);
                } else {
                    console.log("Syslog-Emergency: "+message);
                }
            })
        }
    }
}
