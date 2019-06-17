<p>
 <a href="https://david-dm.org/douglasbarbosadelima/event-emitter-manager">
    <img src="https://david-dm.org/douglasbarbosadelima/event-emitter.manager.svg"
         alt="Dependency Status">
  </a>
 <a href="https://www.npmjs.com/package/event-emitter-manager">
    <img src="https://img.shields.io/npm/v/event-emitter-manager.svg?style=flat-square"
      alt="NPM Version">
  </a>
  <a href="https://www.npmjs.org/package/event-emitter-manager">
    <img src="http://img.shields.io/npm/dm/event-emitter-manager.svg?style=flat-square"
      alt="Downloads">
  </a>
</p>

# event-emitter-manager
This package will provide auxiliary method's to manage EventEmitter and avoid possible Memory Leak problem.

- install: 
 ```js
  const ManageEmitter = require('event-emitter-manager')()
 ```

 - Run unit Test's:
 ``` bash
 npm run test
 ```

 - Run coverage Report:
 ```bash
 npm run coverage
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

