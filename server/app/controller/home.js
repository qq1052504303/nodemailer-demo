'use strict';

const Controller = require('egg').Controller;
const nodemailer = require('nodemailer');

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    let transporter = nodemailer.createTransport({
      // host: 'smtp.ethereal.email',
      service: 'qq',
      port: 465,
      secure: true,
      auth: {
        user: '1052504303@qq.com',
        pass: 'dsfmliafeknxbdaf',
      },
    });

    let info = await transporter.sendMail({
      from: '黎建庭<1052504303@qq.com>',
      to: '1163934931@qq.com',
      subject: 'Hello subject',
      text: 'Hello world text',
      html: '<b>Hello world html</b>',
    });
    ctx.body = 'hi, egg';
  }
}

module.exports = HomeController;
