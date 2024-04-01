import { ReactRenderer, type Preview } from "@storybook/react"
import { withThemeByClassName } from "@storybook/addon-themes"

// import "../styles/tailwind.css"
import "../app/globals.css"

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        // color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    withThemeByClassName<ReactRenderer>({
      themes: {
        light: "light",
        dark: "dark",
        system: "system",
      },
      defaultTheme: "system",
    }),
  ],
}

export default preview
