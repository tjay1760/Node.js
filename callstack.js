console.log("hi");

let x = 1000000000;
// event loop practice
console.time("For Loop Time");  // Start timer

for (let i = 0; i <= x; i++) {
    if (i == x) {
        console.log("one billion reached");
    }
}

console.timeEnd("For Loop Time");  // End timer

setTimeout(() => {
    console.log("Second hi");
}, 7000);

console.log("third hi");
