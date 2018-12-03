const logFile = require("./logs/logFile1.js")

let state = 1;
for (let index = 0; index < logFile.events.length; index++) {
    let event = logFile.events[index];
    console.log(`We are at ${state} and performing action ${event.action}`);
    switch(state){
        case 0:
            if(event.action === 1){
                state = 1;
            }else{
                throw Error(`Cannot perform action ${event.action} on state ${state}`);
            }
        break;
        case 1:
            if(event.action === 1){
                state = 2;
            }else
            if(event.action === 2){
                state = 0
            }else{
                throw Error(`Cannot perform action ${event.action} on state ${state}`);
            }
        break;
        case 2:
            if(event.action === 1){
                state = 1
            }else{
                throw Error(`Cannot perform action ${event.action} on state ${state}`);
            }
        break;
    }
    
}
