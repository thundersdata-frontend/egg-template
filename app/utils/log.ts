/*
 * @文件描述: customLogger
 * @公司: thundersdata
 * @作者: 廖军
 * @Date: 2020-10-14 10:44:43
 * @LastEditors: 廖军
 * @LastEditTime: 2021-03-15 11:27:30
 */

import { Logger, FileTransport, ConsoleTransport } from 'egg-logger';

export default class CustomLogger {
  public fileName: string;

  public logger: Logger;

  constructor({ fileName }: { fileName: string }) {
    this.fileName = fileName;
    this.logger = new Logger({});
    this.logger.set(
      'file',
      new FileTransport({
        file: `../screen-service-log/interface/${fileName}.log`,
        level: 'INFO',
      }),
    );
    this.logger.set(
      'console',
      new ConsoleTransport({
        level: 'INFO',
      }),
    );
  }
}
