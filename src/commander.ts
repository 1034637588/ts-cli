import { logColor } from './chalk.js';
import { Command } from 'commander';
import { createInquire } from './inquires.js';
import { createHandler } from './scripts/createHandler.js';

const program = new Command();

export const initCommander = () => {
    program
        .name('ts-cli')
        .description('创建一个ts项目')
        .version('1.0.0');

    program
        .command('create')
        .description('create a project ')
        .action(() => {
            logColor.blue('🤖 '+' 欢迎使用ts-cli创建项目🌈 🌈 🌈 🌈 🌈 🌈 🌈');

            createInquire().then(res => {
                createHandler(res);
            });
        })
    
    program
        .command('build')
        .description('build a project')
        .action(function(){
            logColor.green('🤖 🤖 '+' build')
        })

    program
        .command('start')
        .description('start a project')
        .action(() => {
            logColor.green('🤖 🤖'+' 启动')
        })
    program.parse(process.argv);
}