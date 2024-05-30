import { Input, Form, Row, Col } from "antd";

const LabelVerification = ({ data, onChange }: any) => {
  const [form] = Form.useForm();

  const handleChange = (changedValues: any) => {
    onChange("label", { ...data.label, ...changedValues });
  };

  return (
    <Form
      layout="vertical"
      form={form}
      onValuesChange={handleChange}
      initialValues={data.label}
    >
      <Row gutter={16}>
        <Col span={24}>
          <Form.Item label="Company Name" name="companyName">
            <Input placeholder="Enter company name" />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={24}>
          <Form.Item label="Label Name" name="labelName">
            <Input placeholder="Enter label name" />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={24}>
          <Form.Item label="YouTube Channel Link" name="youtubeChannel">
            <Input placeholder="Enter YouTube channel link" />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item label="Email" name="email">
            <Input placeholder="Enter email" />
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
          <Form.Item label="Address" name="address">
            <Input placeholder="Enter address" />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default LabelVerification;
