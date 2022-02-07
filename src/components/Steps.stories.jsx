import {
  LoadingOutlined,
  SmileOutlined,
  SolutionOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Steps } from "antd";

const { Step } = Steps;

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Antd/Steps",
  component: Steps,
};

export function StepsExample() {
  return (
    <Steps>
      <Step status="finish" title="Login" icon={<UserOutlined />} />
      <Step status="finish" title="Verification" icon={<SolutionOutlined />} />
      <Step status="process" title="Pay" icon={<LoadingOutlined />} />
      <Step status="wait" title="Done" icon={<SmileOutlined />} />
    </Steps>
  );
}
