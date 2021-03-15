/*
 * @文件描述:
 * @公司: thundersdata
 * @作者: 廖军
 * @Date: 2020-09-10 15:58:14
 * @LastEditors: 廖军
 * @LastEditTime: 2020-09-14 15:12:40
 */
import 'egg';

declare module 'egg' {
  interface Application {
    mysql: any;
  }
}
