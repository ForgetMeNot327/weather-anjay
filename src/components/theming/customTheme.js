import { menuAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers, defineStyle } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(menuAnatomy.keys);

// define the base component styles
const baseStyle = definePartsStyle({
  // define the part you're going to style
  button: {
    // this will style the MenuButton component
    color: "white",
    bgColor: "transparent",
    _hover: { bgColor: "none" },
    _expanded: { bgColor: "transparent" },
  },
  list: {
    // this will style the MenuList component
    borderRadius: "xl",
    border: "none",
    px: "0",
    mt: "-10px",
    alignSelf: "center",
    minW: "fit-content",
    background: "rgba(34, 25, 25, 0.20)",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(10.1px)",
    display: "flex",
    color: "white",
  },
  item: {
    // this will style the MenuItem and MenuItemOption components
    w: "fit-content",
    bg: "transparent",
  },
});
// export the base styles in the component theme
export const menuTheme = defineMultiStyleConfig({ baseStyle });
