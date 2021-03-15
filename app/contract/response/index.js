/*
 * @文件描述: swagger 相关定义
 * @公司: thundersdata
 * @作者: 廖军
 * @Date: 2020-09-29 17:08:25
 * @LastEditors: 廖军
 * @LastEditTime: 2021-03-15 11:22:48
 */

/**
 * 基础结构
 */
const baseConfig = {
  code: { type: 'integer', required: true, example: 20000 },
  success: { type: 'boolean', example: true },
  message: { type: 'string', required: false, example: 'success' },
};

module.exports = {
  baseResponse: {
    ...baseConfig,
    data: { type: 'EmptyData' },
  },
  dataStringResponse: {
    ...baseConfig,
    data: { type: 'string', required: true, example: '' },
  },
  folderStructureResponse: {
    ...baseConfig,
    data: { type: 'array', itemType: 'FolderStructure' },
  },
};
