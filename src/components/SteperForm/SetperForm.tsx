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
import "tailwindcss/tailwind.css";

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
              <Upload
                listType="picture-card"
                beforeUpload={() => false}
                maxCount={1}
              >
                <div className="">
                  <UploadOutlined />
                  <div>Upload</div>
                </div>
              </Upload>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Upload NID (Front)" valuePropName="fileList">
              <Upload
                listType="picture-card"
                beforeUpload={() => false}
                maxCount={1}
              >
                <div>
                  <UploadOutlined />
                  <div>Upload</div>
                </div>
              </Upload>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Upload NID (Back)" valuePropName="fileList">
              <Upload
                listType="picture-card"
                beforeUpload={() => false}
                maxCount={1}
              >
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
            <Form.Item label="Company Name">
              <Input placeholder="Enter company name" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item label="Label Name">
              <Input placeholder="Enter label name" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item label="YouTube Channel Link">
              <Input placeholder="Enter YouTube channel link" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label="Email">
              <Input placeholder="Enter email" />
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
            <Form.Item label="Address">
              <Input placeholder="Enter address" />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    ),
  },
  {
    title: "Review & Confirm",
    content: (
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Label Details
          </h3>
          <p>
            <span className="font-medium text-gray-600">Company Names:</span>{" "}
            xxx
          </p>
          <p>
            <span className="font-medium text-gray-600">Label Names:</span>{" "}
            xxxxxx
          </p>
          <p>
            <span className="font-medium text-gray-600">
              YouTube Channel Link:
            </span>{" "}
            <a
              href="https://www.youtube.com/watch?v=tHcn2DS3eBE"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              https://www.youtube.com/watch?v=tHcn2DS3eBE
            </a>
          </p>
        </div>
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Account Details
          </h3>
          <p>
            <span className="font-medium text-gray-600">Email:</span>{" "}
            arafatchowdhury698@gmail.com
          </p>
          <p>
            <span className="font-medium text-gray-600">Phone:</span>{" "}
            +8801780605388
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Address Details
          </h3>
          <p>
            <span className="font-medium text-gray-600">Address:</span> Dhaka
          </p>
          <p>
            <span className="font-medium text-gray-600">City:</span> Dhaka
          </p>
          <p>
            <span className="font-medium text-gray-600">State:</span> Dhaka
            District
          </p>
          <p>
            <span className="font-medium text-gray-600">Country:</span>{" "}
            Bangladesh
          </p>
          <p>
            <span className="font-medium text-gray-600">Post Code:</span> 12001
          </p>
        </div>
      </div>
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
    <Layout className="min-h-screen">
      <Header className="bg-gray-900 text-white flex items-center justify-center">
        <h1 className="text-2xl font-bold">Verification Process</h1>
      </Header>
      <Content className="p-8 bg-gray-100">
        <Steps current={current} className="mb-8">
          {steps.map((item) => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>
        <div className="bg-white p-8 rounded-lg shadow-md">
          {steps[current].content}
        </div>
        <div className="flex justify-end mt-8">
          {current > 0 && (
            <Button className="mr-2" onClick={() => prev()}>
              Previous
            </Button>
          )}
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
        </div>
      </Content>
    </Layout>
  );
};

export default StepperForm;
