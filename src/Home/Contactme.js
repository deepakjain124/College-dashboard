import React from "react";
import { Button, Modal, Form, Input, Radio } from "antd";

const Contactme = ({ visible, onCreate, onCancel }) => {
  const [form] = Form.useForm();


  return (
    <div>
      <Modal
        visible={visible}
        title="Contact With us For Query"
        okText="Submit"
        cancelText="Cancel"
        onCancel={onCancel}
        onOk={() => {
          form
            .validateFields()
            .then((values) => {
              console.log("values", values);
              form.resetFields();
              onCreate(values);
            })
            .catch((info) => {
              console.log("Validate Failed:", info);
            });
        }}
      >
        <Form
          form={form}
          layout="vertical"
          name="form_in_modal"
          initialValues={{
            modifier: "Male",
          }}
        >
          <Form.Item
            name="Name"
            label="Name"
            rules={[
              {
                required: true,
                message: "Please input the title of collection!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="Email"
            label="Email"
            rules={[
              {
                required: true,
                message: "Please input the title of collection!",
              },
              
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="Description"
            label="Description"
            rules={[
              {
                required: true,
                message: "Please input the title of collection!",
              },
              
            ]}
          >
            <Input.TextArea />
          </Form.Item>
          <Form.Item
            name="modifier"
            className="collection-create-form_last-form-item"
          >
            <Radio.Group>
              <Radio value="Male">Male</Radio>
              <Radio value="Female">Female</Radio>
            </Radio.Group>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Contactme;
