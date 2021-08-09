import React, { useContext, useEffect } from "react";
import { DisplayContext } from "../timer";

function Display() {
  const display = useContext(DisplayContext);
  const distate = display.state;
  var audioTAG = document.getElementById("beep");

  function tick() {
    let timeLeft = document.getElementById("time-left");
    let timeLabel = document.getElementById("timer-label");

    if (distate.play && distate.playSession) {
      if (distate.seconds > 0) {
        display.dispatch([distate.seconds, "-sec"]);
        if (distate.seconds === 1 && distate.session === 0) playAudio();
      } else {
        display.dispatch(["session", "-"]);
        display.dispatch([59, "--sec"]);
        if (distate.session === 1) {
          timeLeft.style.color = "#f30e0ee0";
          timeLabel.style.color = "#f30e0ee0";
        } else if (distate.session === 0) {
          timeLeft.style.color = "black";
          timeLabel.style.color = "black";

          display.dispatch([0, "--sec"]);
          display.dispatch(["session", "resetSession"]);
          // }
        }
      }
    }
    if (distate.play && distate.playBreak) {
      if (distate.seconds > 0) {
        display.dispatch([distate.seconds, "-sec"]);
        if (distate.seconds === 1 && distate.break === 0) playAudio();
      } else {
        display.dispatch(["break", "-"]);
        display.dispatch([59, "--sec"]);
        if (distate.break === 1) {
          timeLeft.style.color = "#f30e0ee0";
          timeLabel.style.color = "#f30e0ee0";
        } else if (distate.break === 0) {
          timeLeft.style.color = "black";
          timeLabel.style.color = "black";

          display.dispatch([0, "--sec"]);

          display.dispatch(["break", "resetBreak"]);
        }
      }
    }
  }
  function playAudio() {
    console.log(audioTAG);
    audioTAG.play();
    return audioTAG;
  }
  useEffect(() => {
    let int = setInterval(() => tick(), 1000);
    // int();
    return () => {
      clearInterval(int);
    };
  });

  return (
    <div id="display">
      <h3 id="timer-label">{distate.onGoing}</h3>
      <div id="time-left">
        {distate.onGoing === "Session" &&
          `${distate.session < 10 ? "0" + distate.session : distate.session}:${
            distate.seconds < 10 ? "0" + distate.seconds : distate.seconds
          }`}
        {distate.onGoing === "Break" &&
          `${distate.break < 10 ? "0" + distate.break : distate.break}:${
            distate.seconds < 10 ? "0" + distate.seconds : distate.seconds
          }`}
      </div>
      <div>
        <audio id="beep">
          {/* <source src="/audio/bip.wav" type="audio/mp3" /> */}
          <source
            src="http://www.ggaub.com/ltag/downloads/sound_lock-on-opponent.wav"
            type="audio/mp3"
          />
        </audio>
      </div>
    </div>
  );
}

export default Display;
