import { useTimer } from "../store/store";


function Timer() {
  const timer = useTimer(state => state.timer);
  const formatTimer = useTimer(state => state.formatTimer)

  return (
    <>
      <div className="text-white">{formatTimer(timer)}</div>
    </>
  );
}

export default Timer;
