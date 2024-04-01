import type { Meta, StoryObj } from "@storybook/react"
import { Navbar } from "./Navbar"

const meta: Meta<typeof Navbar> = {
  title: "Navbar",
  component: Navbar,
  // args: {
  //   intent: "primary",
  //   underline: false,
  //   children: "Navbar",
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

type Story = StoryObj<typeof Navbar>

export const Default: Story = {
  render: () => <Navbar/>,
}

export default meta
