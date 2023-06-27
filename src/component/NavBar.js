import { useEffect, useState } from 'react';
import '../App.css';

const NavBar = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const myInterval = setInterval(() => {
      setTime(
        new Date().toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
        })
      );
    }, 1000);

    return () => {
      clearInterval(myInterval);
    };
  }, []);

  const current = new Date();
  const currDay = current.getDate();
  const currMonth = current.toLocaleString([], {
    month: 'long',
  });
  const currYear = current.getFullYear();
  const options = { weekday: 'long' };
  const day = new Intl.DateTimeFormat('en-US', options).format(current);
  return (
    <div className="date-time">
      <div className="time">
        <span className="currTime"> {time}</span>
        <span className="day"> {day}</span>
      </div>
      <div className="date">
        <span className="currDay">{currDay}</span>
        <div className="month-year">
          <span className="currMonth">{currMonth}</span>
          <span className="currYear">{currYear}</span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
