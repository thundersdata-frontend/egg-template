/*
 * @文件描述: 应用配置
 * @公司: thundersdata
 * @作者: 廖军
 * @Date: 2020-09-15 16:08:08
 * @LastEditors: 廖军
 * @LastEditTime: 2021-03-15 11:25:11
 */

import { AppList } from '../interfaces/common';

/**
 * 下划线转换驼峰
 * @param name
 */
export const toHump = (name: string) =>
  name.replace(/\_(\w)/g, (_, letter) => letter.toUpperCase());

/**
 * 中划线转换驼峰
 * @param name
 */
export const middleLineToHump = (name: string) =>
  name.replace(/\-(\w)/g, (_, letter) => letter.toUpperCase());

/**
 * 驼峰转换下划线
 * @param name
 */
export const toLine = (name: string) =>
  name.replace(/([A-Z])/g, '_$1').toLowerCase();

/**
 * 对象key转换成下划线格式
 * @param params
 */
export const toLineParams = <T>(params: T) => {
  const result = {};
  Object.keys(params).forEach(key => {
    result[toLine(key)] = params[key];
  });
  return result as T;
};

/**
 * 对象key转换成驼峰格式
 * @param params
 */
export const toHumpParams = <T>(params: T) => {
  const result = {};
  Object.keys(params).forEach(key => {
    result[toHump(key)] = params[key];
  });
  return result as T;
};

/**
 * list内对象key转换成驼峰格式
 * @param params
 */
export const listToHumpParams = <T>(list: T[]) =>
  list.map(params => toHumpParams(params));

/**
 * 创建应用初始值，暂时没有但又不能为null
 */
export const defaultProjectParams = {
  createdBy: '',
  updatedBy: '',
  thumbnail: '',
};

/**
 * 数据库查询范围
 */
export const sqlSearchFields = [
  'id',
  'project_name',
  'project_code',
  'app_name',
  'app_code',
  'created_at',
  'created_by',
  'updated_at',
  'updated_by',
  'status',
  'git_status',
  'view_url',
  'thumbnail',
  'git_url',
  'temp_port',
  'git_username',
  'git_password',
  'oauth_info',
];

/**
 * 允许更新的字段 id 为默认条件
 */
export const updateAppFields = [
  'id',
  'projectName',
  'projectCode',
  'appName',
  'appCode',
  'createdBy',
  'updatedBy',
  'status',
  'git_status',
  'viewUrl',
  'thumbnail',
  'gitUrl',
  'tempPort',
  'gitUsername',
  'gitPassword',
  'oauthInfo',
];

/**
 * 对写入的参数进行过滤
 * @param params
 */
export const filterUpdateParams = (params: AppList) => {
  const newParams: AppList = {};
  const arr = updateAppFields;
  Object.keys(params).forEach(key => {
    if (arr.includes(key)) {
      newParams[key] = params[key];
    }
  });
  return newParams;
};

/**
 * 对查询的参数进行过滤
 * @param params
 */
export const filterSearchParams = (params: AppList) => {
  const newParams: AppList = {};
  const arr = [...updateAppFields, 'createdAt', 'updatedAt'];
  Object.keys(params).forEach(key => {
    if (arr.includes(key)) {
      newParams[key] = params[key];
    }
  });
  return newParams;
};
