import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Home from "./pages/Home";
import store from "./redux/store";
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" Component={Home} />
            <Route exact path="/addUser" Component={AddUser} />
            <Route exact path="/editUser/:id" Component={EditUser} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
