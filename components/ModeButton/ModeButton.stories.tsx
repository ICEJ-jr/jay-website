import type { Meta, StoryObj } from "@storybook/react"
import { ModeButton } from "./ModeButton"

const meta: Meta<typeof ModeButton> = {
  title: "ModeButton",
  component: ModeButton,
  args: {
    intent: "primary",
    underline: false,
    children: "ModeButton",
    size: "lg",
  },
  argTypes: {
    intent: {
      options: ["primary", "secondary"],
      control: { type: "select" },
    },
    size: {
      options: ["sm", "lg"],
      control: { type: "select" },
    },
  },
}

type Story = StoryObj<typeof ModeButton>

export const Default: Story = {
  render: (args) => <ModeButton {...args} />,
}

export default meta
