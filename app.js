const chalk = require('chalk');

class ManageEmitter {
    
    constructor({ inspect, reportSeconds, actionOnWarning, increment, showConsoleInspect }){
        if(inspect) this.manage(reportSeconds, actionOnWarning, increment, showConsoleInspect);
        this.monitor;
    }

    listAllEvents(){
        return process._events;
    }

    listCountProcess(){
        return process._eventsCount;
    }

    getMemoryInfo(){
        return process.memoryUsage();
    }

    getMaxListeners(){
        return process.getMaxListeners();
    }

    setLimitListener(n){
        console.log(n);
        try {
            if(n || n > -1){
                process.setMaxListeners(n);
                console.log(chalk.green(`You limit was increased to ${n}.`));
                return `You limit was increased to ${n}.`;
            }

            return new Error('The argument {n} is required');
        }
        catch(e){
            throw new Error(e);
        }
    }

    setLimitLess(){
      process.setMaxListeners(0);
      console.log(chalk.yellow('PAY ATENTION!\nThis action don\'t are recommend, but your process has been executed.\nTo don\'t have problems with Listeners, fix unecessary events.'));
      return `Your process was set to don't have a limit.`;
    }

    manage(seconds = 5000, actionOnWarning, increment = 10, showConsoleInspect = false){
      this.monitor = setInterval(() => {
        const limit = this.getMaxListeners();
        const countProcess = this.listCountProcess();

        if((limit - countProcess) > 3){
          if(showConsoleInspect) console.log(chalk.green(`ManageEmitter STATUS: Everything is fine`));
        }         

        if((limit - countProcess) < 3 && (limit - countProcess) > 1){
          console.log(chalk.yellow(`ManageEmitter STATUS: Warning! The limit of listeners is ${limit}. Now the NodeJS instance has ${countProcess} open listeners`));
          if(actionOnWarning) this.setLimitListener(limit + (increment / 2));
        }

        if((limit - countProcess) <= 1){
          console.log(chalk.red(`FATAL OCCURRENCY!\nYour limit was exceeded and the application could be crashed.\nLimit: ${limit}, Opened process: ${countProcess}`));
          this.setLimitListener(limit + increment);
        }
        
        return;
      }, seconds);
    }

    clearManager(){
      clearInterval(this.monitor);

      console.log(chalk.green('The monitor was stopped'));
      return;
    }
}

module.exports = () => ManageEmitter;