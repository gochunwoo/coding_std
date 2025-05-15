import { useSelector } from "react-redux";

/*
import React from "react";
import ShowNumber from "./ShowNumber";

const ShowNumberSuper = (props) => {
  return (
    <div id="super">
      <h1>ShowNumberSuper</h1>
      ShowNumberSuper 의 number : {props.number}
      <br />
      <ShowNumber number={props.number} />
    </div>
  );
};

export default ShowNumberSuper;
*/

function ShowNumberSuper() {
  const number = useSelector((state) => state.counter.number);

  return (
    <div>
      <h1>ShowNumberSuper</h1>
      <p>Number: {number}</p>
    </div>
  );
}

export default ShowNumberSuper;
