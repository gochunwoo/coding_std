import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUsername, setWeight } from "../redux/userSlice";

function MainForm() {
  const dispatch = useDispatch();
  const { username, weight } = useSelector((state) => state.user);

  return (
    <div>
      <label>
        사용자명:{" "}
        <input
          value={username}
          onChange={(e) => dispatch(setUsername(e.target.value))}
        />
      </label>
      &nbsp;&nbsp;
      <label>
        체중:{" "}
        <input
          type="number"
          value={weight}
          onChange={(e) => dispatch(setWeight(e.target.value))}
        />{" "}
        kg
      </label>
    </div>
  );
}

export default MainForm;
