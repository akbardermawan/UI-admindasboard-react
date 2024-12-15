import "./App.css";
// react Router
import { RouterProvider } from "react-router-dom";
import router from "./router";

// react Redux
import { Provider } from "react-redux";
import store from "./store";

import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <Topbar />
        <div className="container">
          <Sidebar />
          <RouterProvider router={router} />
        </div>
      </div>
    </Provider>
  );
}

export default App;
