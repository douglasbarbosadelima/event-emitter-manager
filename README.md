# event-emitter-manager
This package will provide auxiliary method's to manage EventEmitter and avoid possible Memory Leak problem.

- install: 
 ```js
  const ManageEmitter = require('event-emitter-manager')()
 ```
 
 - Usage:
```js
const manageEmitter = new ManageEmitter({
  inspect: true, // Auto-start the ManageEmitter verification.
  reportSeconds: 3000, // Time to next verification of Listeners OPENED.
  actionOnWarning: true, // Increase maxListeners on Warning Status.
  increment: 10, // Quantity of memory increased.
  showConsoleInspect: true // Show evaluation of verifications on reportSeconds time into Console Application. The default is false
});
```

- Enable methods:
```js
managerEmitter.listAllEvents() //Return an Array of events name.
managerEmitter.listCountProcess() //Return a Number of events opened.
manageEmitter.getMemoryInfo() //Return a Object with Application Memory informations.
manageEmitter.getMaxListeners() //Return the max listeners enable by Node instance.
manageEmitter.setLimitListener() //Set the max listeners enable by Node instance.
manageEmitter.setLimitLess() //Set maxListeners to 0. Warning, this could affect your Application Healt.
manageEmitter.manage() //Init ManageEmitter inspect.
manageEmitter.clearManager() //Stop ManageEmitter verification.
```

*Pay Attention: this package will increase the Memory Leak Application to avoid possible problems. For more informations, visit the [EventEmitter Docs](https://nodejs.org/api/events.html).

