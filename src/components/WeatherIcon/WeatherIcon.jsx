// import "./WeatherForecast.css";

const WeatherIcon = (props) => {
  const { img, imgAlt } = props;
  return (
    <div className="weather">
     
      <img src={img} alt={imgAlt} />
      
    </div>
  );
};

export default WeatherIcon;