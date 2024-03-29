import { ComponentWithAs, createIcon, IconProps } from "@chakra-ui/react"

export const CloseOutline: ComponentWithAs<"svg", IconProps> = createIcon({
  displayName: "CloseOutline",
  viewBox: "0 0 24 24",
  path: (
    <svg>
      <g clipPath="url(#cpCloseOutline)">
        <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10Zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm0-9.414 2.828-2.829 1.415 1.415L13.414 12l2.83 2.828-1.416 1.415L12 13.414l-2.828 2.829-1.415-1.415L10.587 12l-2.83-2.828 1.415-1.415L12 10.586Z" fill="currentColor" />
      </g>
      <defs>
        <clipPath id="cpCloseOutline">
          <path fill="currentColor" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>

  ),
})
