import type { Meta, StoryObj } from "@storybook/react"
import { CustomButton } from "./CustomButton"

const meta: Meta<typeof CustomButton> = {
  title: "CustomButton",
  component: CustomButton,
  args: {
    // intent: "primary",
    // underline: false,
    children: "CustomButton",
    size: "lg",
  },
  argTypes: {
    // intent: {
    //   options: ["primary", "secondary"],
    //   control: { type: "select" },
    // },
    size: {
      options: ["sm", "lg"],
      control: { type: "select" },
    },
  },
}

type Story = StoryObj<typeof CustomButton>

export const Default: Story = {
  render: (args) => <CustomButton {...args} />,
}

export default meta
