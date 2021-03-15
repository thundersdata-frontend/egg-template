/*
 * @文件描述:
 * @公司: thundersdata
 * @作者: 廖军
 * @Date: 2020-09-10 15:58:14
 * @LastEditors: 廖军
 * @LastEditTime: 2020-10-09 14:31:57
 */
import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;
    ctx.body = await ctx.service.test.sayHi('file node service');
  }
}
