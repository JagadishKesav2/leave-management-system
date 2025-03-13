import {
  AppBar as MuiAppBar,
  IconButton,
  Toolbar,
  Typography,
  styled,
  AppBarProps,
  Stack,
  Avatar,
  Skeleton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { COLORS } from "@/styles/theme";
import { UserT } from "@/types";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps & { open?: boolean }>(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

export const Header = ({
  open,
  data,
  isPending,
  isSuccess,
  handleDrawerOpen,
}: {
  open: boolean;
  data?: UserT;
  isPending: boolean;
  isSuccess: boolean;
  handleDrawerOpen: () => void;
}) => (
  <AppBar position="fixed" open={open}>
    <Toolbar>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={handleDrawerOpen}
        edge="start"
        sx={[
          {
            marginRight: 5,
          },
          open && { display: "none" },
        ]}
      >
        <MenuIcon />
      </IconButton>
      <Stack
        direction="row"
        width="100%"
        justifyContent="end"
        alignItems="center"
        spacing={1}
      >
        <Avatar>{isSuccess ? data?.name?.[0] : ""}</Avatar>
        <Typography variant="h6" noWrap component="div">
          {isPending ? (
            <Skeleton width="3rem" sx={{ backgroundColor: COLORS.WHITE }} />
          ) : (
            data?.name || ""
          )}
        </Typography>
      </Stack>
    </Toolbar>
  </AppBar>
);
