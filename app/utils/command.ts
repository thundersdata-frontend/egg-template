#! /usr/bin/env node
/*
 * @文件描述: command
 * @公司: thundersdata
 * @作者: 廖军
 * @Date: 2020-03-18 23:07:03
 * @LastEditors: 廖军
 * @LastEditTime: 2020-09-16 18:12:16
 */

export interface CommandConfig {
  addFolder: string;
  addFile: string;
  del: string;
  rename: string;
}

export const baseConfig = Object.freeze({
  addFolder: {
    windows: 'md',
    mac: 'mkdir',
  },
  addFile: {
    windows: 'type nul>',
    mac: 'touch',
  },
  // 目前只用这个 方便删除整个文件夹（fs只能删除空文件夹）
  del: {
    windows: 'del',
    mac: 'rm -fr',
  },
  rename: {
    windows: 'ren',
    mac: 'mv',
  },
});

/**
 * 获取当前系统应该使用的关键命令
 */
export const getCommandConfig = () => {
  let systemKeyword = '';
  const config = {};
  if (process.platform === 'win32') {
    systemKeyword = 'windows';
  } else {
    systemKeyword = 'mac';
  }
  Object.keys(baseConfig).forEach(key => {
    config[key] = baseConfig[key][systemKeyword];
  });
  return config as CommandConfig;
};

// 当前系统应该使用的关键命令
export const commandConfig = getCommandConfig();
