// This file is created by egg-ts-helper@1.25.9
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportEmail = require('../../../app/controller/email');
import ExportHome = require('../../../app/controller/home');
import ExportUpload = require('../../../app/controller/upload');

declare module 'egg' {
  interface IController {
    email: ExportEmail;
    home: ExportHome;
    upload: ExportUpload;
  }
}
