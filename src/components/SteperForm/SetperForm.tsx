import React, { useState } from "react";
import {
  Button,
  message,
  Steps,
  Upload,
  Input,
  Form,
  Select,
  Layout,
  Row,
  Col,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";

const { Header, Content } = Layout;
const { Step } = Steps;

const steps = [
  {
    title: "Profile Verification",
    content: (
      <Form layout="vertical">
        <Row gutter={16}>
          <Col span={8}>
            <Form.Item label="Upload Profile Picture" valuePropName="fileList">
              <Upload listType="picture-card">
                <div>
                  <UploadOutlined />
                  <div>Upload</div>
                </div>
              </Upload>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Upload NID (Front)" valuePropName="fileList">
              <Upload listType="picture-card">
                <div>
                  <UploadOutlined />
                  <div>Upload</div>
                </div>
              </Upload>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Upload NID (Back)" valuePropName="fileList">
              <Upload listType="picture-card">
                <div>
                  <UploadOutlined />
                  <div>Upload</div>
                </div>
              </Upload>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label="Name">
              <Input placeholder="Enter name" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Phone Number">
              <Input placeholder="Enter phone number" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item label="Email">
              <Input placeholder="Enter email" />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    ),
  },
  {
    title: "Address Information",
    content: (
      <Form layout="vertical">
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label="Country">
              <Select placeholder="Select country">
                <Select.Option value="Bangladesh">Bangladesh</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="State">
              <Select placeholder="Select state">
                {/* Add state options */}
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label="City">
              <Input placeholder="Enter city" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Post Code">
              <Input placeholder="Enter post code" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item label="Address">
              <Input.TextArea placeholder="Enter address" />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    ),
  },
  {
    title: "Label Verification",
    content: (
      <Form layout="vertical">
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item label="Channel Name">
              <Input placeholder="Enter channel name" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item label="Channel URL">
              <Input placeholder="Enter channel URL" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item label="Total Subscriber">
              <Input placeholder="Enter total subscribers" />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    ),
  },
];

const StepperForm = () => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <Layout style={{ height: "100vh" }}>
      <Header>
        <h1 style={{ color: "white" }}>Verification Process</h1>
      </Header>
      <Content style={{ padding: "50px", backgroundColor: "#fff" }}>
        <Steps current={current}>
          {steps.map((item) => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>
        <div style={{ marginTop: 24 }}>{steps[current].content}</div>
        <div style={{ marginTop: 24 }}>
          {current < steps.length - 1 && (
            <Button type="primary" onClick={() => next()}>
              Next
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button
              type="primary"
              onClick={() => message.success("Processing complete!")}
            >
              Done
            </Button>
          )}
          {current > 0 && (
            <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
              Previous
            </Button>
          )}
        </div>
      </Content>
    </Layout>
  );
};

export default StepperForm;
