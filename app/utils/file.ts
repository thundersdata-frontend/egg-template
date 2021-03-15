/*
 * @文件描述: file 相关
 * @公司: thundersdata
 * @作者: 廖军
 * @Date: 2020-09-28 10:42:12
 * @LastEditors: 廖军
 * @LastEditTime: 2020-09-28 11:26:56
 */

import { appendFileSync, existsSync, readFileSync, writeFileSync } from 'fs';

/**
 * 文件读取
 * @param path
 */
export const readFile = (path: string) => {
  if (existsSync(path)) {
    return readFileSync(path, 'utf8');
  }
  return null;
};

/**
 * 文件读取后转json
 * @param path
 */
export const readJsonFile = (path: string) => {
  const str = readFile(path);
  if (str) {
    try {
      return JSON.parse(str);
    } catch (error) {
      return null;
    }
  }
  return null;
};

/**
 * 重写file
 * @param path
 * @param content
 */
export const reWriteFile = (path: string, content: string) => {
  if (existsSync(path)) {
    writeFileSync(path, content, 'utf8');
  } else {
    appendFileSync(path, content, 'utf8');
  }
};
