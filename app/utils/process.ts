#! /usr/bin/env node
/*
 * @文件描述: process
 * @公司: thundersdata
 * @作者: 廖军
 * @Date: 2020-03-16 18:20:31
 * @LastEditors: 廖军
 * @LastEditTime: 2021-03-15 11:07:35
 */

import { Context } from 'egg';
import { Logger } from 'egg-logger';
import { exec, ExecSyncOptions } from 'child_process';
import { Color, white } from 'colors';
import { ExecReturn } from '../interfaces/common';
import CustomLogger from './log';

/**
 * 日志打印
 * @param message
 */
export const logMessage = (message: string, color: Color = white) =>
  console.log(color(`>>>>>> ${message}`));

/**
 * 从多个命令的数组得到命令
 * @param commands
 */
export const getCommandByArray = (commands: string[]) =>
  commands.filter(str => !!str).join(' && ');

/**
 * 接入ctx，便于根据路由做自定义log打印等操作
 */
export default class ProcessUtils {
  public ctx: Context;

  public logger: Logger;

  public interfacePath: string;

  constructor({ ctx }: { ctx: Context }) {
    this.ctx = ctx;
    this.interfacePath = this.ctx.path;
    const appCode =
      ctx.method === 'GET' ? ctx.query.appCode : ctx.request.body.appCode;
    this.logger = new CustomLogger({
      // 根据不同前端应用区分日志
      fileName: `${appCode ? `${appCode}/` : ''}${this.interfacePath
        .split('/')
        .join('_')}`,
    }).logger;
  }

  /**
   * 封装exec Promise
   * @param command
   * @param option
   */
  execPromise = (command: string, option?: ExecSyncOptions) =>
    new Promise((resolve: (result: ExecReturn) => void) => {
      this.logger.info('[COMMAND]: ' + command);
      const childProcess = exec(
        command,
        { timeout: 1000 * 60 * 10, maxBuffer: 5 * 1024 * 1024, ...option },
        (error: Error, stdout: string | Buffer, stderr: string | Buffer) => {
          resolve({ error, stdout, stderr, childProcess });
        },
      );
      childProcess.stdout.on('data', data => {
        this.logger.info('[STDOUT]: ' + data);
      });
      childProcess.stderr.on('data', data => {
        this.logger.error('[STDERR]: ' + data);
      });
      childProcess.on('exit', data => {
        this.logger.info('[EXIT]: ' + data);
      });
      childProcess.on('close', data => {
        this.logger.info('[CLOSE]: ' + data);
      });
    });
}
