const fs = require('fs');
const path = require('path');
const readline = require("readline");
const taskPath = path.join(__dirname, '/tasks');
const tasksFiles = fs.readdirSync(taskPath);
const chalk = require('chalk');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const taskList = tasksFiles.map(task => task.replace('.js', ''));

(function doTasks() {
    console.log(chalk.yellow('Available tasks: ') + taskList.join(', '));

    rl.question('Please choose the number of task: ', (taskNum) => {
        if (taskNum) {
            processLineByLine(taskNum, () => {
                rl.question('Please input arguments, separated by coma: ', (args) => {
                    try {
                        invokeTasks(taskNum, args)
                    } catch (error) {
                        console.log('The error occured, try again!')
                    }
                    doTasks()
                });
            })
        }
    });

})()


async function processLineByLine(num, cb) {
    const fileStream = fs.createReadStream(`./tasks/${num}.js`);
    const rl = readline.createInterface({
        input: fileStream
    });
    for await (const line of rl) {
        if (line.startsWith('//')) {
            console.log(line);
        }
    }
    cb()
}

function invokeTasks(num, args) {
    args = args.split(',').map(item => {
        if (isNaN(Number(item))) {
            return item
        }
        return Number(item)
    });
    const func = require(`./tasks/${num}.js`);
    const result = func.apply(undefined, args);
    console.log(chalk.green('The answer is ') + result);
}


