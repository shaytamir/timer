const initialState = {
  session: 25,
  break: 5,
  seconds: 0,
  play: false,
  playSession: true,
  playBreak: false,
  onGoing: "Session",
  newSession: 25,
  newBreak: 5,
  laps: 3,
  start: false,
};
const reducer = (state, action) => {
  const [prop, act] = action;
  const newSet = prop === "session" ? "newSession" : "newBreak";
  switch (act) {
    case "+":
      const plus = state[prop] + 1;
      if (plus <= 60) {
        if (!state.play) {
          return { ...state, [prop]: plus, [newSet]: plus };
        } else {
          return { ...state, [prop]: plus };
        }
      }
      return state;

    case "-":
      const minus = state[prop] - 1;
      if (minus >= 0) {
        if (!state.play) {
          return { ...state, [prop]: minus, [newSet]: minus };
        } else {
          return { ...state, [prop]: minus };
        }
      }
      return state;
    case "-sec":
      return state.play ? { ...state, seconds: [prop] - 1 } : state;
    case "--sec":
      return state.play ? { ...state, seconds: [prop] } : state;
    case "play":
      return !state.play
        ? {
            ...state,
            play: true,
            start: true,
          }
        : state;
    case "pause":
      return state.play ? { ...state, play: false } : state;
    case "onGo":
      return state.onGoing ? { ...state, onGoing: prop } : state;
    case "resetSession":
      return {
        ...state,
        session: state.newSession,
        playSession: false,
        playBreak: true,
        onGoing: "Break",
      };
    case "resetBreak":
      return {
        ...state,
        break: state.newBreak,
        session: state.newSession,

        playSession: true,
        playBreak: false,
        onGoing: "Session",
      };
    case "reset":
      let beep = document.getElementById("beep");
      beep.pause();
      beep.currentTime = 0;
      return initialState;

    default:
      return state;
  }
};

const reducerValue = [reducer, initialState];
export default reducerValue;
