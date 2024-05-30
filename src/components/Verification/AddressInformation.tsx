import { useEffect } from "react";
import { Input, Form, Select, Row, Col } from "antd";

const AddressInformation = ({ data, onChange }: any) => {
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue(data.address);
  }, [data.address, form]);

  const handleChange = (changedValues: any) => {
    onChange("address", { ...data.address, ...changedValues });
  };

  return (
    <Form layout="vertical" form={form} onValuesChange={handleChange}>
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item label="Country" name="country">
            <Select placeholder="Select country">
              <Select.Option value="Bangladesh">Bangladesh</Select.Option>
            </Select>
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="State" name="state">
            <Select placeholder="Select state">
              {/* Add state options */}
            </Select>
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item label="City" name="city">
            <Input placeholder="Enter city" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="Post Code" name="postCode">
            <Input placeholder="Enter post code" />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={24}>
          <Form.Item label="Address" name="address">
            <Input.TextArea placeholder="Enter address" />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default AddressInformation;
