#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(`${chalk.blueBright("Email")} : ${chalk.yellowBright("suk@gmail.com")} , ${chalk.blueBright("password")} : ${chalk.yellowBright("suk888")} , ${chalk.blueBright("rollnumber")} : ${chalk.yellowBright("575700")}\n`);
let e = "suk@gmail.com";
let p = "suk888";
let r = 575700;
const account = await inquirer.prompt([
    {
        name: "email",
        type: "string ",
        message: chalk.blueBright("inter your email : "),
    },
    {
        name: "password",
        type: "string",
        message: chalk.blueBright("inter your password : "),
    },
    {
        name: "rollnumber",
        type: "number",
        message: chalk.blueBright("inter your rollnumber : "),
    },
]);
if (account.email == e && account.password == p && account.rollnumber == r) {
    console.log(chalk.greenBright("\ncorrect email , password and rollnumber\n"));
    const program = await inquirer.prompt([
        {
            name: "go",
            type: "confirm",
            message: chalk.blueBright("check your result"),
            default: false,
        },
    ]);
    if (program.go == true) {
        console.log();
        let Physics = 47;
        let Chemistry = 32;
        let Englist = 76;
        let Urdu = 43;
        let Pst = 51;
        let Maths = 58;
        let Islamic = 69;
        let TotalMarks = 575;
        let ObtainedMarks = Physics + Chemistry + Englist + Urdu + Pst + Maths + Islamic;
        let Percentage = (ObtainedMarks / TotalMarks) * 100;
        console.log(chalk.bold.yellowBright.bgWhite("\nMarksheet:"));
        console.log(chalk.magenta("\nPhysics:"), Physics);
        console.log(chalk.magenta("Chemistry:"), Chemistry);
        console.log(chalk.magenta("Englist:"), Englist);
        console.log(chalk.magenta("Urdu:"), Urdu);
        console.log(chalk.magenta("Maths:"), Maths);
        console.log(chalk.magenta("pst:"), Maths);
        console.log(chalk.magenta("Islamic:"), Islamic, "\n");
        console.log(chalk.green("Percentage"), Percentage.toFixed(2) + " %");
    }
    else {
        console.log();
    }
}
else {
    console.log(chalk.redBright("error "));
}
