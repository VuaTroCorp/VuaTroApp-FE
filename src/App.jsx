import { BrowserRouter } from "react-router-dom";
import AppRoutes from "routes/AppRoutes";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "hooks/useAuth";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
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
    </AuthProvider>
  );
}

export default App;
