// import { Input, Form, Row, Col } from "antd";

import { Grid, TextField } from "@material-ui/core";
import { useEffect } from "react";

// const LabelVerification = ({ data, onChange }: any) => {
//   const [form] = Form.useForm();

//   const handleChange = (changedValues: any) => {
//     onChange("label", { ...data.label, ...changedValues });
//   };

//   return (
//     <Form
//       layout="vertical"
//       form={form}
//       onValuesChange={handleChange}
//       initialValues={data.label}
//     >
//       <Row gutter={16}>
//         <Col span={24}>
//           <Form.Item label="Company Name" name="companyName">
//             <Input placeholder="Enter company name" />
//           </Form.Item>
//         </Col>
//       </Row>
//       <Row gutter={16}>
//         <Col span={24}>
//           <Form.Item label="Label Name" name="labelName">
//             <Input placeholder="Enter label name" />
//           </Form.Item>
//         </Col>
//       </Row>
//       <Row gutter={16}>
//         <Col span={24}>
//           <Form.Item label="YouTube Channel Link" name="youtubeChannel">
//             <Input placeholder="Enter YouTube channel link" />
//           </Form.Item>
//         </Col>
//       </Row>
//       <Row gutter={16}>
//         <Col span={12}>
//           <Form.Item label="Email" name="email">
//             <Input placeholder="Enter email" />
//           </Form.Item>
//         </Col>
//         <Col span={12}>
//           <Form.Item label="Phone Number" name="phoneNumber">
//             <Input placeholder="Enter phone number" />
//           </Form.Item>
//         </Col>
//       </Row>
//       <Row gutter={16}>
//         <Col span={24}>
//           <Form.Item label="Address" name="address">
//             <Input placeholder="Enter address" />
//           </Form.Item>
//         </Col>
//       </Row>
//     </Form>
//   );
// };

// export default LabelVerification;
const LabelVerification = ({ data, onChange }: any) => {
  useEffect(() => {
    // Set initial form values
  }, []);

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    onChange("label", { ...data.label, [name]: value });
  };

  return (
    <form>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            name="companyName"
            label="Company Name"
            variant="outlined"
            fullWidth
            value={data.label.companyName}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="labelName"
            label="Label Name"
            variant="outlined"
            fullWidth
            value={data.label.labelName}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="youtubeChannel"
            label="YouTube Channel Link"
            variant="outlined"
            fullWidth
            value={data.label.youtubeChannel}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name="email"
            label="Email"
            variant="outlined"
            fullWidth
            value={data.label.email}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name="phoneNumber"
            label="Phone Number"
            variant="outlined"
            fullWidth
            value={data.label.phoneNumber}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="address"
            label="Address"
            variant="outlined"
            fullWidth
            value={data.label.address}
            onChange={handleChange}
          />
        </Grid>
      </Grid>
    </form>
  );
};

export default LabelVerification;
