/*
 * @文件描述:
 * @公司: thundersdata
 * @作者: 廖军
 * @Date: 2020-09-10 15:58:14
 * @LastEditors: 廖军
 * @LastEditTime: 2020-10-12 15:10:24
 */
import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  // static: true,
  // nunjucks: {
  //   enable: true,
  //   package: 'egg-view-nunjucks',
  // },
  cors: {
    enable: true,
    package: 'egg-cors',
  },
  mysql: {
    enable: true,
    package: 'egg-mysql',
  },
  swaggerdoc: {
    enable: true,
    package: 'egg-swagger-doc-pro',
  },
};

export default plugin;
