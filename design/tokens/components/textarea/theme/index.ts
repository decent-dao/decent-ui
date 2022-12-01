import { defineStyleConfig } from '@chakra-ui/react'
import sizes from './textarea.sizes'
import baseStyle from './textarea.base'

const Textarea = defineStyleConfig({
  variants: { base: baseStyle },
  sizes,
  defaultProps: {
    size: 'xl',
    variant: 'base'
  },
})


export default Textarea