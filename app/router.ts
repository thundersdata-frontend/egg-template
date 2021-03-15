/*
 * @文件描述: 路由
 * @公司: thundersdata
 * @作者: 廖军
 * @Date: 2020-09-10 15:58:14
 * @LastEditors: 廖军
 * @LastEditTime: 2021-03-15 11:08:09
 */
import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  // 文件相关
  router.post('/file/add', controller.file.add);
  router.get('/', controller.home.index);
};
