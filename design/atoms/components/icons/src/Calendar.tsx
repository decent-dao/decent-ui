import { ComponentWithAs, createIcon, IconProps } from "@chakra-ui/react"

export const Calendar:  ComponentWithAs<"svg", IconProps> = createIcon({
  displayName: "Calendar",
  viewBox: "0 0 24 24",
  path: (
    <path d="M21.2 3.8H17V2.2a.2.2 0 0 0-.2-.2h-1.4a.2.2 0 0 0-.2.2v1.6H8.8V2.2a.2.2 0 0 0-.2-.2H7.2a.2.2 0 0 0-.2.2v1.6H2.8a.8.8 0 0 0-.8.8v16.6a.8.8 0 0 0 .8.8h18.4a.8.8 0 0 0 .8-.8V4.6a.8.8 0 0 0-.8-.8Zm-1 16.4H3.8v-9.5h16.4v9.5ZM3.8 9V5.6H7v1.2c0 .11.09.2.2.2h1.4a.2.2 0 0 0 .2-.2V5.6h6.4v1.2c0 .11.09.2.2.2h1.4a.2.2 0 0 0 .2-.2V5.6h3.2V9H3.8Z" fill="currentColor" />
  ),
})
