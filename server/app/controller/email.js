'use strict';

const Controller = require('egg').Controller;
const nodemailer = require('nodemailer');

class EmailController extends Controller {
  // 发送邮件
  async index() {
    const { ctx } = this;
    try {
      const { email } = ctx.request.body;
      if (!email) {
        ctx.body = {
          code: -1,
          errMsg: '邮箱有误',
        };
        return;
      }
      const code = this.createCode();
      await ctx.app.redis.set(email, code, 'EX', 30);

      const transporter = nodemailer.createTransport({
        // host: 'smtp.ethereal.email',
        service: 'qq',
        port: 465,
        secure: true,
        auth: {
          user: '1052504303@qq.com',
          pass: 'dsfmliafeknxbdaf',
        },
      });

      await transporter.sendMail({
        from: '变有钱公司<1052504303@qq.com>',
        to: email,
        subject: '验证码',
        text: 'Hello world text',
        html: '你的验证码为：<b>' + code + '</b>',
      });

      ctx.body = {
        code: 200,
      };
    } catch (error) {
      ctx.status = 500;
      ctx.body = {
        code: -1,
        errMsg: '服务器错误',
      };
    }
  }

  // 核对验证码
  async checkCode() {
    const { ctx } = this;
    const { email, code } = ctx.request.body;
    try {
      const redisCode = await ctx.app.redis.get(email);
      if (!redisCode) {
        ctx.body = {
          code: -1,
          errMsg: '验证码已过期，请重新获取',
        };
        return;
      }

      if (redisCode === code) {
        ctx.body = {
          code: 200,
          data: '验证成功',
        };
      } else {
        ctx.body = {
          code: -1,
          errMsg: '验证码错误',
        };
      }
    } catch (error) {
      ctx.status = 500;
      ctx.body = {
        code: -1,
        errMsg: '服务器错误',
      };
    }
  }

  // 生成随机数验证码
  createCode() {
    let code = '';
    for (let i = 0; i < 4; i++) {
      code += Math.floor(Math.random() * 10);
    }
    return code;
  }
}

module.exports = EmailController;
