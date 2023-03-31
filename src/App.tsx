import React, { useState } from 'react';

const App = () => {
  const [temperatureValue, setTemperatureValue] = useState(15);
  const [temperatureColor, setTemperatureColor] = useState('hot');
  const increaseTemperature = () => {
    const newTemperature = temperatureValue + 1;
    setTemperatureValue(newTemperature)

    if (newTemperature >= 15) {
      setTemperatureColor('hot')
    }

    if (newTemperature > 30) {
      alert('Too hot, lets cool down buddy!')
      setTemperatureValue(30);
    }
  }
  const decreaseTemperature = () => {
    const newTemperature = temperatureValue - 1;
    setTemperatureValue(newTemperature)

    if (newTemperature < 15) {
      setTemperatureColor('cold')
    }

    if (newTemperature < 5) {
      alert('Too cold..Too cold..Too cold...')
      setTemperatureValue(5);
    }
  }


	return (
		<div className='app-container'>
			<div className='temperature-display-container'>
      <div className={`temperature-display ${temperatureColor}`}>{temperatureValue}°C</div>
			</div>
			<div className='button-container'>
				<button onClick={increaseTemperature}>+</button>
				<button onClick={decreaseTemperature}>-</button>
			</div>
      
		</div>
	);
};

export default App;
