import chalk, { Chalk } from 'chalk';

const log = console.log;

const COLORS = [
    'black',
    'red',
    'green',
    'yellow',
    'blue',
    'magenta',
    'cyan',
    'white'
];

const BG_COLORS = [
    'bgBlack',
    'bgRed',
    'bgGreen',
    'bgYellow',
    'bgBlue',
    'bgMagenta',
    'bgCyan',
    'bgWhite'
];

interface ColorLog {
    [key: string]: (text: string) => void
};

const color: ColorLog = {};
const bgColor: ColorLog = {};

COLORS.forEach(item => {
    color[item] = (text: string) => {
        type key = keyof Pick<Chalk, 'black'> ;
        log(chalk[item as key](text));
    };
});

BG_COLORS.forEach(item => {
    bgColor[item] = (text: string) => {
        type key = keyof Pick<Chalk, 'black'> ;
        log(chalk[item as key](text));
    };
});

export const logColor = color;
export const logBgColor = BG_COLORS;

