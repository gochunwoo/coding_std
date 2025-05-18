import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import store from "./redux/Store";
import EmployeesSearch from "./mydir/EmployeesSearch";
import CustomersSearch from "./mydir/CustomersSearch";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>직원 자료 읽기(DB)</h1>
        <EmployeesSearch />
        <h1>고객 자료 읽기(DB)</h1>
        <CustomersSearch />
      </div>
    </Provider>
  );
}

export default App;
