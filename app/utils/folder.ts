/*
 * @文件描述: 文件夹相关
 * @公司: thundersdata
 * @作者: 廖军
 * @Date: 2020-09-17 14:46:34
 * @LastEditors: 廖军
 * @LastEditTime: 2020-09-17 17:30:32
 */

import { statSync, readdirSync } from 'fs';
import * as path from 'path';
import { getSuccessData, getErrorData } from './status';
import { FolderStructure } from '../interfaces/common';

/**
 * 根据路径获取指定文件夹的目录及文件结构
 * @param pathStr
 */
export const getFolderStructure = (pathStr: string) => {
  try {
    const data = [];
    const subStart = pathStr.length - 2;
    const loopDirs = (dirPath, array) => {
      // 排除 node_modules .git
      const dirs = readdirSync(dirPath).filter(
        name => !['node_modules', '.git'].includes(name),
      );
      for (let i = 0; i < dirs.length; i += 1) {
        const name = dirs[i];
        const structure = { name } as FolderStructure;
        const currentPath = path.join(dirPath, name);
        const stats = statSync(currentPath);
        if (stats.isDirectory()) {
          // 记录路径 便于直接获取文件或打开文件夹
          structure.path = currentPath.substring(subStart, currentPath.length);
          structure.type = 'dir';
          structure.children = [];
          array.push(structure);
          loopDirs(currentPath, array[i].children);
        } else {
          structure.path = currentPath.substring(
            subStart,
            currentPath.length - name.length,
          );
          structure.type = 'file';
          array.push(structure);
        }
      }
    };
    loopDirs(pathStr, data);
    return getSuccessData(data, '目录结构获取成功');
  } catch (error) {
    return getErrorData(error, '目录结构获取异常，请检查路径是否正确！');
  }
};
