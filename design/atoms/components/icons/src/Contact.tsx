import { ComponentWithAs, createIcon, IconProps } from "@chakra-ui/react"

export const Contact: ComponentWithAs<"svg", IconProps> = createIcon({
  displayName: "Contact",
  viewBox: "0 0 24 24",
  path: (
    <path
      d="M17.547 16.5V21h-1.8v-4.5a9.901 9.901 0 0 1 5.802-9.014l.746 1.638a8.101 8.101 0 0 0-4.748 7.376Zm-9 0V21h-1.8v-4.5A8.102 8.102 0 0 0 2 9.124l.745-1.638A9.902 9.902 0 0 1 8.547 16.5Zm3.6-4.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9Zm0-1.8a2.7 2.7 0 1 0 0-5.4 2.7 2.7 0 0 0 0 5.4Z"
      fill="currentColor"
    />
  ),
})
