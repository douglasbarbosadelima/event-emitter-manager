# event-emitter-manager
This package will provide auxiliary method's to manage EventEmitter and avoid possible Memory Leak problem.

- install: 
 ```js
  const ManageEmitter = require('event-emitter-manager')()
 ```
 
 - Usage:
```js
const manageEmitter = new ManageEmitter({
  inspect: true, // Enable log's into your Application Console
  reportSeconds: 3000, // Time to next verification of Listeners OPENED
  actionOnWarning: true, // Increase maxListeners on Warning Status
  increment: 10 // Quantity of memory increased
});
```

