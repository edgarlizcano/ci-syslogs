
#ci-syslogs
##Descripcion
Modulo para gestion de logs via UDP.
##instalación

```js
npm install @ci24/ci-syslogs
```

##Uso
```js
let Logg = require("@ci24/ci-syslogs").Logger;
let facility = Logg.Facilities;
let severity = Logg.Severities;
var Log = new Logg("127.0.0.1", facility.Billetero);
```
Con las opciones _facility_ y _severity_ se puede determinar desde que entidad y con que severidad se envia un log, clasificandolos en los directorios configurados del systema operativo para cada caso.

##Funciones


###Enviar log
```js
Log.WriteLog("Iniciando Proceso", severity.Debug);
Log.WriteLog("Error en consulta", severity.Alert);
Log.WriteLog("Sistema bloqueado", severity.Critical);
```
