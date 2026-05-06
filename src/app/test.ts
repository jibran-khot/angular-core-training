let numbers = [12, 45, 7, 89, 23];

function findSecondLargest(num: number[]): number {

    let largest: number = num[0];
    let secondLargest: number = num[1];

    for (let index = 1; index < num.length; index++) {

        if (num[index] > largest) {
            secondLargest = largest;
            largest = num[index];
        }
        else if (num[index] > secondLargest && num[index] < largest) {
            secondLargest = num[index];
        }
    }

    return secondLargest;
}

let output = findSecondLargest(numbers);
console.log(output);