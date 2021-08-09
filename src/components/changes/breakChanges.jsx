import React, { useContext } from "react";
import { DisplayContext } from "../timer";

function BreakChange() {
  const display = useContext(DisplayContext);
  const distate = display.state;

  return (
    <div className="break_changes">
      <h2 id="break-label">Break Length</h2>
      <div className="arrow_icons_div">
        <i
          className="fas fa-angle-down"
          id="break-decrement"
          onClick={() => {
            !distate.play &&
              distate.break > 1 &&
              !distate.start &&
              display.dispatch(["break", "-"]);
          }}
        ></i>
        <div id="break-length">
          {!distate.play ? distate.newBreak : distate.newBreak}
        </div>
        <i
          className="fas fa-angle-up"
          id="break-increment"
          onClick={() => {
            !distate.play && !distate.start && display.dispatch(["break", "+"]);
          }}
        ></i>
      </div>
    </div>
  );
}

export default BreakChange;
