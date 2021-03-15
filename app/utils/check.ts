/*
 * @文件描述: 参数校验
 * @公司: thundersdata
 * @作者: 廖军
 * @Date: 2020-03-22 17:17:04
 * @LastEditors: 廖军
 * @LastEditTime: 2021-03-15 11:26:39
 */
import { Context } from 'egg';
import { getErrorData } from './status';

/**
 * 验证名称类（appName、folderName、fileName）
 * @param name
 */
export const checkName = (name: string) => {
  const errorMessages: string[] = [];
  let success = true;
  if (!/^[a-zA-Z0-9]+[a-zA-Z0-9_-]{1,50}$/.test(name)) {
    errorMessages.push(
      `${name} 验证失败（字母或数字开头，允许出现-_，长度1-50）`,
    );
    success = false;
  }
  return { success, message: errorMessages.join(';') };
};

/**
 * 校验短文本，适用于（message、projectId）
 * @param str
 */
export const checkSortContent = (
  str: string | number,
  minLength: number = 1,
) => {
  if (typeof str === 'number') {
    str = '' + str;
  }
  const success =
    str.length >= minLength &&
    str.length <= 100 &&
    ['string', 'number'].includes(typeof str);
  return { success };
};

/**
 * 校验自定义命令
 * @param scripts
 */
export const checkScripts = (scripts: string[]) => {
  let success = true;
  if (!Array.isArray(scripts)) {
    return { success: false };
  }
  scripts.forEach(cmd => {
    if (
      typeof cmd !== 'string' ||
      /(start|umi dev)/.test(cmd) // 启动需要pm2集中管理，否则可能出现端口映射异常现象
    ) {
      success = false;
    }
  });
  return { success };
};

/**
 * 校验空字符
 * @param str
 */
export const checkStr = (str: string) => {
  return { success: typeof str === 'string' };
};

/**
 * 字段校验
 */
export const fieldsCheck = {
  projectName: checkSortContent,
  appName: checkName,
  scripts: checkScripts,
  path: checkStr,
  folderName: checkName,
  newFolderName: checkName,
  fileName: checkStr,
  newFileName: checkStr,
  fileContent: (str: string) => ({ success: typeof str === 'string' }),
  message: (str: string) => checkSortContent(str, 0),
  projectCode: checkSortContent,
  appCode: checkSortContent,
  thumbnail: checkStr,
  gitUrl: checkStr,
  originName: checkName,
  gitUsername: checkStr,
  gitPassword: checkSortContent,
};

/**
 * 检查GET必传项
 * @param ctx
 * @param params
 */
export const checkCtxParams = (ctx: Context, params: string[]) => {
  const payload = ctx.method === 'GET' ? ctx.query : ctx.request.body;
  const emptyFields: string[] = [];
  const verifyFields: string[] = [];
  params.forEach(key => {
    // 必传校验
    if (!payload[key]) {
      emptyFields.push(key);
    } else if (fieldsCheck[key]) {
      const { success, message = `${key} 验证失败` } = fieldsCheck[key](
        payload[key],
      );
      if (!success) {
        verifyFields.push(message);
      }
    }
  });
  if (emptyFields.length > 0) {
    ctx.body = getErrorData(null, `参数：${emptyFields.join(',')} 不能为空！`);
    return false;
  }
  if (verifyFields.length > 0) {
    ctx.body = getErrorData(null, verifyFields.join(';'));
    return false;
  }
  return true;
};
