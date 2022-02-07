import { Rate } from "antd";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Antd/Rate",
  component: Rate,
  argTypes: { onChange: { action: "clicked" } },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Rate {...args} />;

export const HalfStar = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HalfStar.args = {
  allowHalf: true,
  value: 3,
};
