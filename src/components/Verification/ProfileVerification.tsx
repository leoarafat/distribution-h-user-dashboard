import React, { useEffect, useState } from "react";
import { Upload, Input, Form, Row, Col } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const ProfileVerification = ({ data, onChange }) => {
  const [form] = Form.useForm();
  const [profilePictureFileList, setProfilePictureFileList] = useState([]);

  useEffect(() => {
    form.setFieldsValue(data.profile);
    if (data.profile.profilePicture && data.profile.profilePicture.fileList) {
      setProfilePictureFileList(data.profile.profilePicture.fileList);
    }
  }, [data.profile, form]);

  const handleChange = (changedValues) => {
    onChange("profile", { ...data.profile, ...changedValues });
  };

  const handleProfilePictureChange = ({ fileList }) => {
    setProfilePictureFileList(fileList);
    form.setFieldsValue({ profilePicture: { fileList } });
  };
  return (
    <Form layout="vertical" form={form} onValuesChange={handleChange}>
      <Row gutter={16}>
        <Col span={8}>
          <Form.Item label="Upload Profile Picture" name="profilePicture">
            <Upload
              listType="picture-card"
              beforeUpload={() => false}
              maxCount={1}
              fileList={profilePictureFileList}
            >
              <div>
                <UploadOutlined />
                <div>Upload</div>
              </div>
            </Upload>
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item label="Upload NID (Front)" name="nidFront">
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
          <Form.Item label="Upload NID (Back)" name="nidBack">
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
          <Form.Item label="Name" name="name">
            <Input placeholder="Enter name" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="Phone Number" name="phoneNumber">
            <Input placeholder="Enter phone number" />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={24}>
          <Form.Item label="Email" name="email">
            <Input placeholder="Enter email" />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default ProfileVerification;
