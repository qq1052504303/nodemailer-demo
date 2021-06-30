'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  // router.post('/api/upload', controller.upload.index);
  router.post('/api/email', controller.email.index);
  router.post('/api/checkCode', controller.email.checkCode);
};
