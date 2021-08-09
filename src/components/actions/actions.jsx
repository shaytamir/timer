import React, { useContext } from "react";
import { DisplayContext } from "../timer";

function Actions() {
  const display = useContext(DisplayContext);
  const distate = display.state;
  return (
    <div id="actions_div">
      <div
        id="start_stop"
        onClick={() => {
          display.dispatch(["play", distate.play ? "pause" : "play"]);
        }}
      >
        <img src="../../images/icons/play.png" alt="play icon" />
        <img src="../../images/icons/pause.png" alt="pause icon" />
      </div>

      <img
        src="../../images/icons/reset.png"
        id="reset"
        alt="reset icon"
        onClick={() => {
          display.dispatch(["reset", "reset"]);
        }}
      />
    </div>
  );
}

export default Actions;
