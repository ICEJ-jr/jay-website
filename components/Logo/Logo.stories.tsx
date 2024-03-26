import type { Meta, StoryObj } from "@storybook/react"
import { Logo } from "./Logo"

const meta: Meta<typeof Logo> = {
  title: "Logo",
  component: Logo,
  // args: {
  //   intent: "primary",
  //   underline: false,
  //   children: "Logo",
  //   size: "lg",
  // },
  // argTypes: {
  //   intent: {
  //     options: ["primary", "secondary"],
  //     control: { type: "select" },
  //   },
  //   size: {
  //     options: ["sm", "lg"],
  //     control: { type: "select" },
  //   },
  // },
}

type Story = StoryObj<typeof Logo>

export const Default: Story = {
  render: () => <Logo/>,
}

export default meta
