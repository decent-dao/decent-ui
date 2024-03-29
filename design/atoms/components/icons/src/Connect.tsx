import { ComponentWithAs, createIcon, IconProps } from "@chakra-ui/react"

export const Connect: ComponentWithAs<"svg", IconProps> = createIcon({
  displayName: "Connect",
  viewBox: "0 0 24 24",
  path: (
    <path
      d="m13.06 8.11 1.415 1.415a7 7 0 0 1 0 9.9l-.354.353a7 7 0 1 1-9.9-9.9l1.415 1.415a5 5 0 1 0 7.071 7.071l.354-.354a5 5 0 0 0 0-7.07l-1.415-1.415 1.415-1.414h-.001Zm6.718 6.011-1.414-1.414a5 5 0 1 0-7.071-7.07l-.354.353a5 5 0 0 0 0 7.07l1.415 1.415-1.415 1.414-1.414-1.414a7 7 0 0 1 0-9.9l.354-.353a7 7 0 1 1 9.9 9.9h-.001Z"
      fill="currentColor"
    />
  ),
})
