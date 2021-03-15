/*
 * @文件描述: 应用相关的数据库操作
 * @公司: thundersdata
 * @作者: 廖军
 * @Date: 2020-09-14 15:04:13
 * @LastEditors: 廖军
 * @LastEditTime: 2021-03-15 11:05:05
 */
import { Service } from 'egg';
import { AppSearchParams, AppList } from '../interfaces/common';
import { getSuccessData, getErrorData } from '../utils/status';
import {
  toLineParams,
  listToHumpParams,
  sqlSearchFields,
  filterSearchParams,
} from '../utils/app';

export default class AppService extends Service {
  /**
   * 列表查询
   * @param params
   */
  async get(params: AppSearchParams) {
    try {
      const list: AppList[] = await this.app.mysql.select('project', {
        where: {
          ...toLineParams(filterSearchParams(params)),
        },
        columns: sqlSearchFields,
        orders: [['created_at', 'desc']],
        limit: 100000,
        offset: 0,
      });
      return getSuccessData(
        listToHumpParams(list).map(item => ({
          ...item,
        })),
        '项目列表获取成功',
      );
    } catch (error) {
      this.logger.error(error);
      return getErrorData(error, '项目列表获取失败');
    }
  }
}
