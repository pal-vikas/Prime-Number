let pr = prompt("Enter your number");

if (pr === null) {
    console.log("Cancelled");
} else {
    let num = Number(pr);
    if (isNaN(num)) {
        console.log("Invalid Input");
    } else {
        if (num > 1) {
            let isPrime = true;

            for (let i = 2; i <= Math.sqrt(num); i++) {
                if (num % i === 0) {
                    isPrime = false;
                    break;
                }
            }

            if (isPrime) {
                console.log(num + " is a Prime Number");
            } else {
                console.log(num + " is Not a Prime Number");
            }

        } else {
            console.log("Number should be greater than 1 to check for Prime");
        }
    }
}
