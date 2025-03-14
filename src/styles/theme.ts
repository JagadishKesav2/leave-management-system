import { createTheme } from "@mui/material/styles";
import "@fontsource-variable/open-sans/index.css";
import { TypographyOptions } from "@mui/material/styles/createTypography";

// Define colours to be used throughout the app
export const COLORS = {
  WHITE: "#FFFFFF",
  BLACK: "#000000",
  RED: "#FF0000",
};

export const ONE_REM_TO_PX = 16;

export const CUSTOM_MODAL_MARGIN_IN_REM = 4;

// Define font styles to be used throughout the app
export const FONT = {
  // Define available font-families to be used throughout the app
  FAMILY: {
    OPEN_SANS: ["Open Sans Variable", "sans-serif"].join(","),
  },
  LINE_HEIGHT: "136.4%",
  // Define font weights that would be used throughout the app
  WEIGHT: {
    LIGHT: 300,
    REGULAR: 400,
    MEDIUM: 500,
    SEMIBOLD: 600,
    BOLD: 700,
  },
  // Define font sizes that would be used throughout the app in rem
  // the numbers on the left indicates the px equivalent of the rem values
  SIZES: {
    48: "3rem",
    36: "2.25rem",
    32: "2rem",
    30: "1.875rem",
    28: "1.75rem",
    24: "1.5rem",
    22: "1.375rem",
    20: "1.25rem",
    18: "1.125rem",
    16: "1rem",
    15: "0.9375rem",
    14: "0.875rem",
    12: "0.75rem",
    10: "0.625rem",
    9: "0.563rem",
    8: "0.5rem",
  },
  LINE_HEIGHTS: {
    11: "0.688rem",
    12: "0.75rem",
    13: "0.813rem",
    14: "0.875rem",
    16: "1rem",
    19: "1.188rem",
    22: "1.375rem",
    25: "1.5625rem",
    26: "1.563rem",
    27: "1.688rem",
    30: "1.875rem",
    33: "2.063rem",
    38: "2.375rem",
    49: "3.063rem",
  },
};

const TYPOGRAPHY: TypographyOptions = {
  fontFamily: FONT.FAMILY.OPEN_SANS,
  h1: {
    fontSize: FONT.SIZES[28],
    lineHeight: FONT.LINE_HEIGHT,
    fontWeight: FONT.WEIGHT.BOLD,
  },
  h2: {
    fontSize: FONT.SIZES[24],
    lineHeight: FONT.LINE_HEIGHT,
    fontWeight: FONT.WEIGHT.MEDIUM,
  },
  h3: {
    fontSize: FONT.SIZES[22],
    lineHeight: FONT.LINE_HEIGHT,
    fontWeight: FONT.WEIGHT.BOLD,
  },
  h4: {
    fontSize: FONT.SIZES[20],
    lineHeight: FONT.LINE_HEIGHT,
    fontWeight: FONT.WEIGHT.REGULAR,
  },
  h5: {
    fontSize: FONT.SIZES[16],
    lineHeight: FONT.LINE_HEIGHT,
    fontWeight: FONT.WEIGHT.REGULAR,
  },
  h6: {
    fontSize: FONT.SIZES[14],
    lineHeight: FONT.LINE_HEIGHT,
    fontWeight: FONT.WEIGHT.REGULAR,
  },
};

/**
 * UX spacing defaults to 6px (converted to rem)
 * Please do not export. Use "theme.spacing(1)" instead
 */
const SPACE_UNIT_IN_REM = 0.375;

/**
 * Base theme allows us to make use of options that are provided by default MUI
 * and custom spacing declaration
 */
export const baseTheme = createTheme({
  spacing: (factor: number) => `${SPACE_UNIT_IN_REM * factor}rem`,
  typography: TYPOGRAPHY,
});
