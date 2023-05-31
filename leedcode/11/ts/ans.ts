async function sleep(millis: number): Promise<void> {
    function callback(resolve: () => void, reject: () => void){
        setTimeout(resolve, millis);
    }

    return new Promise(callback);
}