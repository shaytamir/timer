import React, { useReducer } from "react";
import Changes from "./changes/changes";
import Display from "./display/display";
import reducerValue from "../service/displayReducer.js";
import Actions from "./actions/actions";

export const DisplayContext = React.createContext();

function Timer() {
  const [reducer, initialState] = reducerValue;
  const [value, dispatch] = useReducer(reducer, initialState);

  return (
    <div id="timer">
      <div id="timer_div">
        <h1>Timer</h1>
        <DisplayContext.Provider
          value={{
            state: value,
            dispatch: dispatch,
            initialState: initialState,
          }}
        >
          <Changes />
          <Display />
          <Actions />
          {/* actions div */}
        </DisplayContext.Provider>
      </div>
    </div>
  );
}

export default Timer;
