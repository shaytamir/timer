import React, { useContext } from "react";
import { DisplayContext } from "../timer";

function SessionChanges() {
  const display = useContext(DisplayContext);
  const distate = display.state;

  return (
    <div className="session_changes">
      <h2 id="session-label">Session Length</h2>
      <div className="arrow_icons_div">
        <i
          className="fas fa-angle-down"
          id="session-decrement"
          onClick={() => {
            !distate.play &&
              distate.session > 1 &&
              !distate.start &&
              display.dispatch(["session", "-"]);
          }}
        ></i>

        <div id="session-length">
          {!distate.play ? distate.newSession : distate.newSession}
        </div>
        <i
          className="fas fa-angle-up"
          id="session-increment"
          onClick={() => {
            !distate.play &&
              !distate.start &&
              display.dispatch(["session", "+"]);
          }}
        ></i>
      </div>
    </div>
  );
}

export default SessionChanges;
