import * as syslog from "syslog-client";

export class Logger {
    private facility: any;
    private client: syslog;
    public static Facilities = {
        Billetero: 17, //Local1
        Billing: 18, //Local2
        Logic: 19, //Local3
        Machine: 20, //Local4
        Monedero: 21, //Local5
        Liquidation: 22, //Local6
        Other: 23 //Local7
    };

    public static Severities = {
        Emergency:     0,
        Alert:         1,
        Critical:      2,
        Error:         3,
        Warning:       4,
        Notice:        5,
        Informational: 6,
        Debug:         7
    };

    constructor(ip: string, facility: any) {
        this.facility = facility;
        let createOptions = {
            transport: syslog.Transport.Udp,
            port: 514
        };

        this.client = syslog.createClient(ip, createOptions);
        this.client.on("error", function (error) {
            console.error(error);
            this.client.close();
        });
        this.client.on("close", function () {
            console.log("connection closed");
        });
    }

    public WriteLog=(message, severity)=>{
        let logOptions = {
            facility: this.facility,
            severity: severity
        };
        this.client.log(message, logOptions, function(error) {
            if (error) {
                console.error(error);
            } else {
                console.log("Syslog-"+severity+": "+message);
            }
        })
    }
}
