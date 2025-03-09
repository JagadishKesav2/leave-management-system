import { BrowserRouter as Router } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { AppRoutes } from "./routes";
import { baseTheme } from "./styles/theme";
import { store } from "./store";
import { Toast } from "./components/Toast";

// Initialize the QueryClient
const queryClient = new QueryClient();

const App = () => {
  return (
    <Provider store={store}>
      <Toast />
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={baseTheme}>
          <CssBaseline />
          <Router>
            <AppRoutes />
          </Router>
        </ThemeProvider>
      </QueryClientProvider>
    </Provider>
  );
};

export default App;
