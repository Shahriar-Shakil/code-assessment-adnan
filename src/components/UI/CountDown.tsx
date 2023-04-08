import Countdown, { CountdownRenderProps } from "react-countdown";

type Props = {};
var date = new Date();
date.setDate(date.getDate() + 3);
export default function CountDownComponent({}: Props) {
  const renderer = (props: CountdownRenderProps) => {
    const { days, hours, minutes, seconds, completed } = props;
    if (completed) {
      // Render a completed state
      return <></>;
    } else {
      // Render a countdown
      return (
        <p className="time">
          <span className="timeBox">{days}d</span> :{" "}
          <span className="timeBox">{hours}h</span> :{" "}
          <span className="timeBox">{minutes}m</span> :{" "}
          <span className="timeBox">{seconds}s</span>
        </p>
      );
    }
  };
  return <Countdown date={date} renderer={renderer} />;
}
