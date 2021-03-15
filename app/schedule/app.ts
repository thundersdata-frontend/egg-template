/*
 * @文件描述: APP 状态定时同步
 * @公司: thundersdata
 * @作者: 廖军
 * @Date: 2020-10-28 14:21:26
 * @LastEditors: 廖军
 * @LastEditTime: 2021-03-15 11:01:08
 */

import { Subscription } from 'egg';

export default class UpdateCache extends Subscription {
  // 通过 schedule 属性来设置定时任务的执行间隔等配置
  static get schedule() {
    return {
      interval: '1m',
      type: 'all',
      immediate: false,
    };
  }

  // subscribe 是真正定时任务执行时被运行的函数
  async subscribe() {}
}
