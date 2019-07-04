let light = {
    on() {
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                let status = "ON"
                console.log("Lights on");
                resolve(status)
            }, 1000)
        });
        return promise;
    }
}

let ac = {
    on() {
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                let status = "ON"
                console.log("AC on");
                resolve(status)
            }, 1000)
        });
        return promise;
    }
}

let projector = {
    on() {
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                let status = "ON"
                console.log("Projector on");
                resolve(status)
            }, 1000)
        });
        return promise;
    }
}


let door = {
    open() {
        console.log('door opens....')
        let promise1 = light.on();
        let promise2 = ac.on();
        let promise3 = projector.on();
        console.log("Let's light it up");

        let lightUp = Promise.all([promise1, promise2, promise3])
            .then(
                result => {   
                    return "All systems functional"
                },
                error => console.log(error)
            )

        lightUp.then(result => {
            console.log(result);
        })
    },

    close() {
        console.log('door closes....')


    }
};
door.open()