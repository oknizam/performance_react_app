onmessage = (event: any) => {
    console.log("event", event)
    setTimeout(() => {
        let sum = 0;
        for (let i = 1; i < 10; i++) {
            sum += i;
        }
        postMessage(sum)
    }, 5000);

}