const myPromise = new Promise<number>( ( resolve, reject ) => {
    setTimeout(() => {
        //! yo quiero mi dinero
        resolve(100)
        reject(`hes gone`)
    }, 2000);
})


myPromise.then(
    (myMoney) => {
        console.log(`Tengo mi dinero ${myMoney}`)
    }
).catch(reason => {
    console.warn(reason);
    
}).finally( () => console.log(`palante`))