import { ComponentWithAs, createIcon, IconProps } from "@chakra-ui/react"

export const Clock: ComponentWithAs<"svg", IconProps> = createIcon({
  displayName: "Clock",
  viewBox: "0 0 24 24",
  path: (
    <path
      d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10Zm0-2a8 8 0 1 0 0-16.001A8 8 0 0 0 12 20Zm1-8h4v2h-6V7h2v5Z"
      fill="currentColor"
    />
  ),
})
