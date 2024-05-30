// import { useEffect } from "react";
// import { Input, Form, Select, Row, Col } from "antd";

import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import { useEffect } from "react";

// const AddressInformation = ({ data, onChange }: any) => {
//   const [form] = Form.useForm();

//   useEffect(() => {
//     form.setFieldsValue(data.address);
//   }, [data.address, form]);

//   const handleChange = (changedValues: any) => {
//     onChange("address", { ...data.address, ...changedValues });
//   };

//   return (
//     <Form layout="vertical" form={form} onValuesChange={handleChange}>
//       <Row gutter={16}>
//         <Col span={12}>
//           <Form.Item label="Country" name="country">
//             <Select placeholder="Select country">
//               <Select.Option value="Bangladesh">Bangladesh</Select.Option>
//             </Select>
//           </Form.Item>
//         </Col>
//         <Col span={12}>
//           <Form.Item label="State" name="state">
//             <Select placeholder="Select state">
//               {/* Add state options */}
//             </Select>
//           </Form.Item>
//         </Col>
//       </Row>
//       <Row gutter={16}>
//         <Col span={12}>
//           <Form.Item label="City" name="city">
//             <Input placeholder="Enter city" />
//           </Form.Item>
//         </Col>
//         <Col span={12}>
//           <Form.Item label="Post Code" name="postCode">
//             <Input placeholder="Enter post code" />
//           </Form.Item>
//         </Col>
//       </Row>
//       <Row gutter={16}>
//         <Col span={24}>
//           <Form.Item label="Address" name="address">
//             <Input.TextArea placeholder="Enter address" />
//           </Form.Item>
//         </Col>
//       </Row>
//     </Form>
//   );
// };

// export default AddressInformation;
const AddressInformation = ({ data, onChange }: any) => {
  useEffect(() => {
    // Set initial form values
  }, []);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    onChange("address", { ...data.address, [name]: value });
  };

  return (
    <form>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Country</InputLabel>
            <Select
              value={data?.address.country}
              onChange={handleChange}
              name="country"
            >
              <MenuItem value="Bangladesh">Bangladesh</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name="state"
            label="State"
            variant="outlined"
            fullWidth
            value={data?.address.state}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name="city"
            label="City"
            variant="outlined"
            fullWidth
            value={data?.address.city}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name="postCode"
            label="Post Code"
            variant="outlined"
            fullWidth
            value={data?.address.postCode}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="address"
            label="Address"
            variant="outlined"
            fullWidth
            value={data?.address.address}
            onChange={handleChange}
          />
        </Grid>
      </Grid>
    </form>
  );
};

export default AddressInformation;
