/*
 * @文件描述: file相关接口请求参数定义
 * @公司: thundersdata
 * @作者: 廖军
 * @Date: 2020-09-30 11:18:52
 * @LastEditors: 廖军
 * @LastEditTime: 2020-10-13 18:03:35
 */

const { BASE_REQUIRED_STRING_TYPES } = require('../dto').BASE_TYPES;

module.exports = {
  FileEdit: {
    path: { type: 'string', required: true, example: '/' },
    fileName: BASE_REQUIRED_STRING_TYPES,
    appCode: BASE_REQUIRED_STRING_TYPES,
    fileContent: { type: 'string' },
  },
  FileDel: {
    path: { type: 'string', required: true, example: '/' },
    fileName: BASE_REQUIRED_STRING_TYPES,
    appCode: BASE_REQUIRED_STRING_TYPES,
  },
};
