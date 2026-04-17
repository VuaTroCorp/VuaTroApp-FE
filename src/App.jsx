import { BrowserRouter } from "react-router-dom";
import AppRoutes from "routes/AppRoutes";
import { ToastContainer } from "react-toastify";
import { AppProvider } from "contexts/Provider/AppProvider";
import ScrollToTop from "components/shared/common/ScrollToTop";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <ScrollToTop />
        <ToastContainer
          enableMultiContainer
          containerId="default"
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          closeOnClick
          pauseOnHover
          draggable
        />
        <ToastContainer
          containerId="errors"
          position="top-center"
          autoClose={false}
          hideProgressBar
          closeOnClick={false}
          draggable={false}
        />
        <AppRoutes />
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;