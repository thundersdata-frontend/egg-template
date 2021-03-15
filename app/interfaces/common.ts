/*
 * @文件描述:
 * @公司: thundersdata
 * @作者: 廖军
 * @Date: 2020-09-11 09:46:13
 * @LastEditors: 廖军
 * @LastEditTime: 2021-03-15 11:24:57
 */
import { ExecOptions, ChildProcess } from 'child_process';

export interface ExecReturn {
  error: Error;
  stdout: string | Buffer;
  stderr: string | Buffer;
  childProcess: ChildProcess;
}

export interface ExecOption extends ExecOptions {
  encoding: 'buffer' | null | string | BufferEncoding;
}

/**
 * 项目搜索参数
 */
export interface AppSearchParams {
  id?: number;
  projectName?: string;
  projectCode?: string;
  appName?: string;
  appCode?: string;
  status?: number;
  gitStatus?: number;
}

/**
 * 项目列表内容
 */
export interface AppList {
  id?: number;
  createdAt?: string;
  createdBy?: string;
  updatedAt?: string;
  updatedBy?: string;
  deleted?: boolean;
}

/**
 * 文件结构
 */
export interface FolderStructure {
  name: string;
  type: 'dir' | 'file';
  path: string;
  children: FolderStructure[];
}
