const makeChange = (c) => {
      c = Number(c)
	let change = {
        q: Math.floor(c / 25),  // Quarters
        d: Math.floor((c % 25) / 10),  // Dimes
        n: Math.floor((c % 25 % 10) / 5),  // Nickels
        p: c % 5  // Pennies
    };
    return change;
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
