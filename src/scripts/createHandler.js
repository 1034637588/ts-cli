import downLoad from 'download-git-repo';
import path from 'path';
import { logColor } from '../chalk.js';
import { promisify } from 'util';
import { templateRepo } from '../config.const.js';
import { npm } from '../npm.js';

export const createHandler = async ({name, email, packge}) => {
    const download = promisify(downLoad);

    // 拉取代码
    logColor.blue('代码拉取中...' + path.resolve(name));
    await download(
      templateRepo,
      path.resolve(name),
      {
        clone: true
      }
    );
    logColor.blue('代码拉取成功！');

    // 安装依赖
    logColor.blue('依赖安装中...' + path.resolve(name));
    npm(['install'], path.resolve(name), (data, err) => {
      if (!err) {
        logColor.green('安装成功！');
      }
      else {
        logColor.red('安装失败！');
        console.log(err);
      }
    });
}