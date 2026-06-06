const employeeName: string = "Jibran";
const employeeAge: number = 25;
const basicSalary: number = 30000;
const bonus: number = 5000;
const isPermanent: boolean = true;

// Function Declaration
function calculateSalary(basicSalary: number, bonus: number): number {
    const totalSalary: number = basicSalary + bonus;
    return totalSalary;
}

// Function Expression
const getEmployeeInfo = function (
    employeeName: string,
    employeeAge: number
): string {
    return `Employee: ${employeeName}, Age: ${employeeAge}`;
};

// Arrow Function
const printEmployeeSummary = (): void => {
    const employeeInfo: string = getEmployeeInfo(
        employeeName,
        employeeAge
    );

    const totalSalary: number = calculateSalary(
        basicSalary,
        bonus
    );

    console.log(employeeInfo);
    console.log(`Total Salary: ${totalSalary}`);
    console.log(`Permanent Employee: ${isPermanent}`);
};

printEmployeeSummary();