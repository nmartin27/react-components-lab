import "./WeatherForecast.css";

const DayWeather = (props) => {
  const { day, conditions, time } = props;
  return (
    <div className="weather">
      <h2>{day}</h2>
      <img src="" alt="" />
      <p>
        <span>Conditions:  </span>{conditions}
      </p>
      <p>
        <span>Time: </span>{time}
      </p>
    </div>
  );
};

export default DayWeather;