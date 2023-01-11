import { useState, useEffect } from 'react';
import SelectZone from './components/SelectZone';
function App() {
  const [time, setTime] = useState()// time,setTime is used for getting && setting the current time respectively
  const [zone, setZone] = useState("Europe/Zurich")// when you change your zone the current time will adapt to your zone

  ////// countries we have available (You can add more countries if you want  https://en.wikipedia.org/wiki/List_of_tz_database_time_zones):
  const countries = [
    { capital: "Zurich", zone: "Europe/Zurich", id: 1 },
    { capital: "Toronto", zone: "America/Toronto", id: 2 },
    { capital: "Seoul", zone: "Asia/Seoul", id: 3 },
    { capital: "Paris", zone: "Europe/Paris", id: 4 },
    { capital: "Mexico city", zone: "America/Mexico_City", id: 5 }
  ]
  ///TIP: you might wanna use useEffect here

  ///TIP : try to display the clock first without worrying about zones, the zone has already an initial value of "Europe/Zurich"
  // once you can display the current time, changing zones is quite simple thanks to the <select/> element and onChange event

  const [timer, setTimer] = useState("__:__:__");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const timeString = now.toLocaleTimeString("en-US", { timeZone: zone });
      setTimer(timeString);
    }, 1000);
    return () => clearInterval(interval)
  }, [zone]);

  return (
    <div className="App">
      <SelectZone setZone={setZone} countries={countries} />
      {<div key={5} className='digital'>{timer}</div>}

    </div>
  );
}

export default App;

