const employees: string[] = [
    'Jibran',
    'Rahul',
    'Amit',
    'Sara',
    'Priya'
];

function addEmployee(employeeName: string): string[] {
    employees.push(employeeName);
    return employees;
}

const findEmployee = function (employeeName: string): boolean {
    const result = employees.find((name) => {
        return name === employeeName;
    });

    return result !== undefined;
};

const removeEmployee = (employeeName: string): string[] => {
    const index = employees.indexOf(employeeName);

    if (index !== -1) {
        employees.splice(index, 1);
    }

    return employees;
};

function printEmployees(): void {
    for (let index = 0; index < employees.length; index++) {
        console.log(employees[index]);
    }
}

printEmployees();

addEmployee('Karan');

printEmployees();

console.log(findEmployee('Sara'));

removeEmployee('Rahul');

printEmployees();