import React from "react";
import { Form, Input, Icon, Button, message } from "antd";
import request from "./util/request";

const Email = (props) => {
  const { getFieldDecorator } = props.form;
  const handleSubmit = (e) => {};

  const getCode = () => {
    props.form.validateFields(async (err, values) => {
      if (!err) {
        if (!values?.email) {
          return;
        }
        const res = await request("/api/email", {
          method: "post",
          data: {
            email: values.email,
          },
        });

        if (res?.code === 200) {
          message.success('验证码发送成功')
        }
      }
    });
  };

  const checkCode = () => {
    props.form.validateFields(async (err, values) => {
      if (!err) {
        if (!values?.email || !values?.code) {
          return;
        }
        const res = await request("/api/checkCode", {
          method: "post",
          data: {
            email: values.email,
            code: values.code
          },
        });

        if (res?.code === 200) {
          message.success('验证成功')
        } else {
          message.error(res?.errMsg || '未知错误')
        }
      }
    });
  }
  return (
    <div style={{ width: "500px", margin: "0 auto", marginTop: 200 }}>
      <div></div>
      <div>
        <Form onSubmit={handleSubmit}>
          <Form.Item>
            {getFieldDecorator("email")(
              <Input
                prefix={
                  <Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="邮箱"
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("code")(
              <Input
                prefix={
                  <Icon type="check" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="验证码"
              />
            )}
          </Form.Item>
        </Form>
        <div>
          <Button type="primary" onClick={getCode}>
            获取验证码
          </Button>
          <Button type="primary" style={{ marginLeft: 20 }} onClick={checkCode}>
            提交
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Form.create()(Email);
