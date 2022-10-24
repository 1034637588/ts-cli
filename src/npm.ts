import witch from 'which';
import { spawn } from 'child_process';

// 找到npm的执行文件
export const findNpm = () => {
  try {
      const npmName = process.platform === 'win32' ? 'npm.cmd' : 'npm';
      return witch.sync(npmName);
  } catch (error) {
    throw new Error('please install npm');
  }
}

// 通过子进程执行命令
export const runCmd = (cmd: string, args: string[] = [], cwd: string, fn: (data: any, err: any) => void) => {
  const runner = spawn(cmd, args, {
    stdio: 'inherit',
    cwd
  });

  runner.on('close', (code) => {
    if (fn) {
      fn(code, 0);
    }
  });

  runner.on('error', (err) => {
    if (fn) {
      fn(null , err);
    }
  });
}

// 暴露npm 执行入口
export const npm = (args: string[] = ['install'], cwd: string, cb: (data: any, err: any) => void) => {
  const npmPath = findNpm();
  runCmd(npmPath, args, cwd, cb);
}

