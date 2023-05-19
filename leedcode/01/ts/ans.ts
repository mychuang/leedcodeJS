function createHelloWorld() {
	return function(...args: any[]): string {
        return "Hello World"        
    };
};


const f = createHelloWorld();
console.log(f()); // "Hello World"
