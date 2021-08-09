import React, { useContext } from "react";
import { DisplayContext } from "../timer";

function BreakChange() {
  const display = useContext(DisplayContext);
  const distate = display.state;

  return (
    <div className="break_changes">
      <h2 id="break-label">Break Length</h2>
      <div className="arrow_icons_div">
        <img
          src="../../images/icons/down_arrow.png"
          alt="down arrow"
          id="break-decrement"
          onClick={() => {
            !distate.play &&
              distate.break > 1 &&
              !distate.start &&
              display.dispatch(["break", "-"]);
          }}
        />
        <div id="break-length">
          {!distate.play ? distate.newBreak : distate.newBreak}
          {/* {distate.break} */}
        </div>
        <img
          id="break-increment"
          src="../../images/icons/up_arrow.png"
          alt="up arrow"
          onClick={() => {
            !distate.play && !distate.start && display.dispatch(["break", "+"]);
          }}
        />
      </div>
    </div>
  );
}

export default BreakChange;
