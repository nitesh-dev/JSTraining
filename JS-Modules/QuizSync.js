//Door open/close
//Light on/off
//AC on/off
//Projector on/off

//Door opened, pass event to all listeners
//Light AC and Projectors should not be tightly coupled with Door

class Door {

    constructor(isOpen, eventListeners)
    {
        this.isOpen = isOpen
        this.eventListeners = []
    }
    open() {
        console.log("Door is open");
        let event = {status: 'open'}
        this.eventListeners.forEach(eventListener => {
            eventListener.on(event)
        });

    }
    close()
    {
        console.log("Door is closed")
        let event = {status: 'open'}
        this.eventListeners.forEach(eventListener => {
            eventListener.off(event)
        });
    }
    addListener(eventListener)
    {
    this.eventListeners.push(eventListener)
    }
    removeListener(eventListener)
    {
    this.eventListeners = this.eventListeners.filter(l => l !== eventListener)
    }
    removeAllListeners()
    {
    this.eventListeners = this.eventListeners.splice(0,eventListeners.length)
    }
}


let light = {
    on(event)
    {
        console.log("Lights switched on")
    },
    off(event)
    {
        console.log("Lights switched off")
    }
}

let ac = {
    on(event)
    {
        console.log("AC switched on")
    },
    off(event)
    {
        console.log("AC switched off")
    }
}


let projector = {
    on(event)
    {
        console.log("Projector switched on")
    },
    off(event)
    {
        console.log("Projector switched off")
    }
}


let door = new Door();
door.addListener(light)
door.addListener(ac)
door.addListener(projector)


setTimeout(() => {
    door.open()
    setTimeout(() => {
        door.close()
        door.removeAllListeners()
    }, 5000)
}, 10000)