/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1624417795906_6483';

  config.security = {
    csrf: {
      enable: false,
    },
  };

  // add your middleware config here
  config.middleware = [];

  config.multipart = {
    fileSize: '50mb',
    mode: 'stream',
    fileExtensions: [ '.xls', '.txt' ], // 扩展几种上传的文件格式
  };

  config.bodyParser = {
    formLimit: '30mb',
    jsonLimit: '30mb',
    textLimit: '30mb',
  };

  config.redis = {
    client: {
      port: 6379,
      host: '127.0.0.1',
      password: '',
      db: 0,
    },
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
