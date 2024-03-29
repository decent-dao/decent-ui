import { ComponentWithAs, createIcon, IconProps } from "@chakra-ui/react"

export const Tree: ComponentWithAs<"svg", IconProps> = createIcon({
  displayName: "Tree",
  viewBox: "0 0 24 24",
  path: (
    <path d="M10 2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H8v2h5V9a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-1H8v6h5v-1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-1H7a1 1 0 0 1-1-1V8H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h6Zm9 16h-4v2h4v-2Zm0-8h-4v2h4v-2ZM9 4H5v2h4V4Z" fill="currentColor"/>
  ),
})
