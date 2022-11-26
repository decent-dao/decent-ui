import { extendTheme } from '@chakra-ui/react';
import foundations from './foundations';
import breakpoints from './breakpoints';
import components from './components';
import styles from './styles';

const theme = extendTheme(
  {
    styles,
    breakpoints,
    ...foundations,
    components,
  },
  {
    breakpoints: {},
    colors: {},
    fontWeights: {},
    fonts: {}
  }
);
export default theme;