class MyClass {
    n = (value) => {
        console.log("Value is: " + value);
    }
}

const instance = new MyClass();
instance.n(20); // Outputs: Value is: 20
