/*
 * @文件描述: 生命周期
 * @公司: thundersdata
 * @作者: 廖军
 * @Date: 2020-10-30 09:59:59
 * @LastEditors: 廖军
 * @LastEditTime: 2021-03-15 11:45:17
 */

import { Application } from 'egg';

export default class AppBootHook {
  public app: Application;

  constructor(app) {
    this.app = app;
  }

  // http / https server 已启动，开始接受外部请求
  async serverDidReady() {}
}
