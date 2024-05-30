import { useState, useEffect } from "react";
import { Button, message, Steps, Layout } from "antd";
import ProfileVerification from "../Verification/ProfileVerification";
import AddressInformation from "../Verification/AddressInformation";
import LabelVerification from "../Verification/LabelVerification";
import ReviewConfirm from "../Verification/ReviewConfirm";

const { Header, Content } = Layout;
const { Step } = Steps;

const steps = [
  {
    title: "Profile Verification",
    component: ProfileVerification,
  },
  {
    title: "Address Information",
    component: AddressInformation,
  },
  {
    title: "Label Verification",
    component: LabelVerification,
  },
  {
    title: "Review & Confirm",
    component: ReviewConfirm,
  },
];

const StepperForm = () => {
  const [current, setCurrent] = useState(0);
  const [formData, setFormData] = useState({
    profile: {},
    address: {},
    label: {},
  });

  // Load saved form data from localStorage on component mount
  useEffect(() => {
    const savedData = localStorage.getItem("formData");
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const handleDataChange = (step, data) => {
    const updatedFormData = { ...formData, [step]: data };
    setFormData(updatedFormData);
    // Save updated form data to localStorage
    localStorage.setItem("formData", JSON.stringify(updatedFormData));
  };

  const StepComponent = steps[current].component;

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
          <StepComponent data={formData} onChange={handleDataChange} />
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
              onClick={() => {
                message.success("Processing complete!");
                // Clear localStorage when done
                localStorage.removeItem("formData");
              }}
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
