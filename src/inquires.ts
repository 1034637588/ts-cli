import inquirer from 'inquirer';

const question = [
    {
        name:'conf',        
        type:'confirm',
        message:'是否在当前目录下创建项目？'
    },{
        name:'name',
        message:'请输入项目名称',
        when: (res: { conf: any; }) => Boolean(res.conf)
   },{
        name:'email',
        message:'请输入邮箱',
        when: (res: { conf: any; }) => Boolean(res.conf)
   },{
        type: 'list',
        message: '请选择一个包管理工具',
        name: 'packge',
        choices: ['npm','yarn'],
        filter: (val: string) => {
          return val.toLowerCase()
        },
        when: (res: { conf: any; }) => Boolean(res.conf)
   }
]

export const createInquire = ():Promise<any> => {
  return inquirer
    .prompt(question)
};
