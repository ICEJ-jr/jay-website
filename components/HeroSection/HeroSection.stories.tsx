import type { Meta, StoryObj } from "@storybook/react"
import { HeroSection } from "./HeroSection"

const meta: Meta<typeof HeroSection> = {
  title: "HeroSection",
  component: HeroSection,
  // args: {
  //   intent: "primary",
  //   underline: false,
  //   children: "HeroSection",
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

type Story = StoryObj<typeof HeroSection>

export const Default: Story = {
  render: () => <HeroSection/>,
}

export default meta
