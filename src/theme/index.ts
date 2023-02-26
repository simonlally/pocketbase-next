import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const components = {
  Button: {
    baseStyle: {
      background: "gray.800",
      color: "gray.200",
      _hover: {
        bg: "gray.700",
      },
    },
  },
};

const theme = extendTheme({ config });

export default theme;
