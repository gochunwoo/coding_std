import { Provider } from "react-redux";
import { store } from "./store/store";
import AddNumberSuper from "./mydir/AddNumberSuper";
import ShowNumberSuper from "./mydir/ShowNumberSuper";
import "./App.css";

/*
import { useState } from "react";
import "./App.css";
import AddNumberSuper from "./mydir/AddNumberSuper";
import ShowNumberSuper from "./mydir/ShowNumberSuper";

function App() {
  const [number, setNumber] = useState(0);

  const handleAddNumber = (size) => {
    setNumber(number + size);
    console.log(number);
  };

  return (
    <div className="App">
      <h1>Main</h1>
      <AddNumberSuper onClick={handleAddNumber} />
      AddNumber : {number}
      <br />
      <ShowNumberSuper number={number} />
    </div>
  );
}
*/

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Main</h1>
        <AddNumberSuper />
        <ShowNumberSuper />
      </div>
    </Provider>
  );
}

export default App;
