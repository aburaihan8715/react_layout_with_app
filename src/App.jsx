import { RouterProvider } from "react-router-dom";
import { router } from "./router/routes";

const App = () => {
  return (
    <div style={{ maxWidth: "800px", margin: "0 auto" }}>
      <RouterProvider router={router} />;
    </div>
  );
};

export default App;
