/*
 * @文件描述: 文件相关操作
 * @公司: thundersdata
 * @作者: 廖军
 * @Date: 2020-03-22 17:07:00
 * @LastEditors: 廖军
 * @LastEditTime: 2021-03-15 11:30:00
 */
import { Controller, Context } from 'egg';
import { getSuccessData, getErrorData } from '../utils/status';
import { checkCtxParams } from '../utils/check';

/**
 * @Controller file 文件操作类Controller
 */
export default class FileController extends Controller {
  /**
   * @Router POST /file/add
   * @Request body FileEdit
   * @Response 200 object EmptyData ok
   * @Summary 到指定目录新建文件
   * 测试地址 http://localhost:7001/file/add
   * 请求类型 POST
   * @param ctx
   */
  public async add(ctx: Context) {
    const { path: pathStr, fileName } = ctx.request.body;
    if (!checkCtxParams(ctx, ['path', 'fileName', 'appCode'])) {
      return;
    }
    try {
      ctx.body = getSuccessData(
        null,
        `成功创建文件 ${fileName} 至 ${pathStr === '/' ? '根目录' : pathStr}！`,
      );
    } catch (error) {
      this.logger.error(error);
      ctx.body = getErrorData(error, '文件写入失败，请检查路径是否正确！');
    }
  }
}
