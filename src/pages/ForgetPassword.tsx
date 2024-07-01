import AuthWrapper from "@/components/share/AuthWrapper";
import Title from "@/components/share/Title";
import { useForgetPasswordMutation } from "@/redux/slices/admin/settingApi";
import { Button, Form, Input } from "antd";
import toast from "react-hot-toast";

const ForgetPassword = () => {
  const [forgetPassword, { isLoading }] = useForgetPasswordMutation();

  const onFinish = async (values: any) => {
    try {
      localStorage.setItem("email", values?.email);
      const res = await forgetPassword(values);
      if (res?.data?.success == true) {
        toast.success(res?.data?.message);
      }
    } catch (error: any) {
      console.log(error?.message);
    }
  };
  return (
    <AuthWrapper>
      <div className="text-center mb-12">
        <Title>Forget Password</Title>
        <p>Please enter your email and click send</p>
      </div>
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item label="Email" name="email">
          <Input placeholder="Enter your email" style={{ height: "50px" }} />
        </Form.Item>

        <Form.Item>
          <Button
            className="bg-secondary h-12 text-white text-lg w-full mt-6"
            htmlType="submit"
          >
            {isLoading ? "Sending..." : "Send"}
          </Button>
        </Form.Item>
      </Form>
    </AuthWrapper>
  );
};

export default ForgetPassword;
