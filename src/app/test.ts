let users = [
    { name: "A", age: 15 },
    { name: "B", age: 22 },
    { name: "C", age: 30 },
    { name: "D", age: 12 }
];
function groupUsers(users: { name: string, age: number }[]) {

    let adultCount = 0;
    let minorCount = 0;

    for (let user of users) {
        if (user.age >= 18) {
            adultCount++;
        } else {
            minorCount++;
        }
    }

    return {
        adultCount,
        minorCount
    };
}

let result = groupUsers(users);
console.log(result);
