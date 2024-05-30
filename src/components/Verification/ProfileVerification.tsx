import { useEffect, useState } from "react";
import { Upload, Input, Form, Row, Col } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const ProfileVerification = ({ data, onChange }: any) => {
  const [form] = Form.useForm();
  const [profilePictureFileList, setProfilePictureFileList] = useState([]);
  const [nidFrontFileList, setNidFrontFileList] = useState([]);
  const [nidBackFileList, setNidBackFileList] = useState([]);
  useEffect(() => {
    form.setFieldsValue(data.profile);
    if (data.profile.profilePicture && data.profile.profilePicture.fileList) {
      setProfilePictureFileList(data.profile.profilePicture.fileList);
    }
    if (data.profile.nidFront && data.profile.nidFront.fileList) {
      setNidFrontFileList(data.profile.nidFront.fileList);
    }
    if (data.profile.nidBack && data.profile.nidBack.fileList) {
      setNidBackFileList(data.profile.nidBack.fileList);
    }
  }, [data.profile, form]);

  const handleChange = (changedValues: any) => {
    onChange("profile", { ...data.profile, ...changedValues });
  };

  return (
    <Form layout="vertical" form={form} onValuesChange={handleChange}>
      <Row
        gutter={16}
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "16px",
        }}
      >
        <Col span={3}>
          <Form.Item label="Upload Profile Picture" name="profilePicture">
            <Upload
              listType="picture-card"
              beforeUpload={() => false}
              maxCount={1}
              fileList={profilePictureFileList}
              style={{ width: "300px", height: "300px" }}
            >
              <div>
                <UploadOutlined style={{ fontSize: "40px" }} />{" "}
                <div style={{ fontSize: "20px" }}>Upload</div>{" "}
              </div>
            </Upload>
          </Form.Item>
        </Col>
        <Col span={3}>
          <Form.Item label="Upload NID (Front)" name="nidFront">
            <Upload
              listType="picture-card"
              beforeUpload={() => false}
              maxCount={1}
              fileList={nidFrontFileList}
            >
              <div>
                <UploadOutlined style={{ fontSize: "40px" }} />
                <div style={{ fontSize: "20px" }}>Upload</div>
              </div>
            </Upload>
          </Form.Item>
        </Col>
        <Col span={3}>
          <Form.Item label="Upload NID (Back)" name="nidBack">
            <Upload
              listType="picture-card"
              beforeUpload={() => false}
              maxCount={1}
              fileList={nidBackFileList}
            >
              <div>
                <UploadOutlined style={{ fontSize: "40px" }} />
                <div style={{ fontSize: "20px" }}>Upload</div>
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
