/*
 * @文件描述: dto 相关，主要把接口接收和返回的复杂数据格式做定义
 * @公司: thundersdata
 * @作者: 廖军
 * @Date: 2020-09-29 17:47:30
 * @LastEditors: 廖军
 * @LastEditTime: 2021-03-15 11:22:06
 */

// 基础的string类型定义
const BASE_REQUIRED_STRING_TYPES = { type: 'string', required: true };
// 基础的number类型定义
const BASE_REQUIRED_NUMBER_TYPES = { type: 'number', required: true };
// 基础的boolean类型定义
const BASE_REQUIRED_BOOLEAN_TYPES = { type: 'boolean', required: true };

module.exports = {
  BASE_TYPES: {
    BASE_REQUIRED_STRING_TYPES,
    BASE_REQUIRED_NUMBER_TYPES,
    BASE_REQUIRED_BOOLEAN_TYPES,
  },
  EmptyData: {},
  FolderStructure: {
    name: { type: 'string', required: true, example: 'pages' },
    type: {
      type: 'string',
      required: true,
      enum: ['dir', 'file'],
      example: 'dir',
    },
    path: { type: 'string', required: true, example: '/src' },
    children: { type: 'array', itemType: 'FolderStructure' },
  },
};
