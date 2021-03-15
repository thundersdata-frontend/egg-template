/*
 * @文件描述:
 * @公司: thundersdata
 * @作者: 廖军
 * @Date: 2020-09-10 15:58:14
 * @LastEditors: 廖军
 * @LastEditTime: 2021-03-15 14:04:27
 */
import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1599723842759_1389';

  // add your egg config in here
  config.middleware = [];

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };

  config.security = {
    csrf: {
      enable: false,
    },
    // 白名单
    domainWhiteList: [
      'http://egg-frontend.dev.thundersdata.com',
      'http://egg-frontend.thundersdata.com',
    ],
  };

  config.cors = {
    // origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
    credentials: true,
  };

  // mysql -P3307 -h192.168.0.201 -uliaojun -pleishu egg_service
  // 当前使用表名：project
  config.mysql = {
    // 单数据库信息配置
    client: {
      // host
      host: '192.168.0.201',
      // 端口号
      port: '3307',
      // 用户名
      user: 'liaojun',
      // 密码
      password: 'leishu',
      // 数据库名
      database: 'egg_service',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };

  /**
   * 日志储存路径
   */
  config.logger = {
    dir: '../egg-service-log',
  };

  /**
   * 自定义日志（以接口为基础的实时分类日志）
   */
  config.customLogger = {
    interfaceLogger: {
      file: '../egg-service-log/interface/interface.log',
      outputJSON: true,
    },
  };

  config.cluster = {
    listen: {
      path: '',
      port: 7001,
      hostname: '0.0.0.0',
    },
  };

  /**
   * swagger 生成配置
   * http://localhost:7001/swagger-ui.html
   * http://localhost:7001/swagger-doc
   */
  config.swaggerdoc = {
    dirScanner: './app/controller',
    apiInfo: {
      title: 'egg-service-swagger',
      description: 'swagger-ui for egg-service',
      version: '1.0.0',
    },
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json'],
    enableSecurity: false,
    routerMap: false,
    enable: true,
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
