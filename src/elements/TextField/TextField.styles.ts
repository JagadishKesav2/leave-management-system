import { TextField as MuiTextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import { COLORS, FONT } from "@/styles/theme";

export const CustomTextField = styled(MuiTextField)(
  ({ theme }) => `
    width: 100%;
    margin-top: ${theme.spacing(1)};
    margin-bottom: ${theme.spacing(0.5)};
  
    border: none !important;
    border-radius: 0.25rem;
  
    .MuiInputBase-root {
      height: 100%;
    }
  
    .MuiInputBase-input {
      color: ${COLORS.BLACK};
      font-weight: ${FONT.WEIGHT.REGULAR};
      font-size: ${FONT.SIZES[14]};
      line-height: ${FONT.LINE_HEIGHTS[19]};
      padding: 0 inherit !important;
      
    }

    .MuiFormHelperText-root {
        margin-left: 0;
    }
  `
);
