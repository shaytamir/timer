import React, { useContext } from "react";
import { DisplayContext } from "../timer";

function SessionChanges() {
  const display = useContext(DisplayContext);
  const distate = display.state;

  return (
    <div className="session_changes">
      <h2 id="session-label">Session Length</h2>
      <div className="arrow_icons_div">
        <img
          id="session-decrement"
          src="/images/icons/down_arrow.png"
          alt="down arrow"
          onClick={() => {
            !distate.play &&
              distate.session > 1 &&
              !distate.start &&
              display.dispatch(["session", "-"]);
          }}
        />
        <div id="session-length">
          {!distate.play ? distate.newSession : distate.newSession}
        </div>
        <img
          id="session-increment"
          src="/images/icons/up_arrow.png"
          alt="up arrow"
          onClick={() => {
            !distate.play &&
              !distate.start &&
              display.dispatch(["session", "+"]);
          }}
        />
      </div>
    </div>
  );
}

export default SessionChanges;
