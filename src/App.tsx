import { QueryClient, QueryClientProvider } from "@tanstack/react-query"; 
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify"; // Import ToastContainer
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import "./App.css";

// Create a QueryClient instance
const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/",
    element: <Dashboard />,
  },
]);

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
        />
        <RouterProvider router={router} />
      </QueryClientProvider>
    </>
  );
}

export default App;