
 function redlight() {
    
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("red");
            resolve();
        }, 10000);
    });
}
 function yellowlight() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("yellow");
            resolve();
        }, 7000);
    });
}
 function greenlight() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("green");
            resolve();
        }, 5000);
    });
}

const step2 = async () => {
    await redlight();
    await yellowlight();
    await greenlight();
    step2();
}



step2();


const step = () => new Promise((resolve) => {
    setTimeout(() =>{
        redlight();
        resolve();
    }, 1000);
}).then(() => {
    return new Promise(resolve => {
        setTimeout(() =>{
            yellowlight();
            resolve();
        }, 1000);
        
    });
}).then(() => {
    return new Promise(resolve => {
        setTimeout(() =>{
            greenlight();
            resolve();
        }, 1000);
    });
}).then(() => step());