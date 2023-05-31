import './App.scss';
import './App.css';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs'
import 'dayjs/locale/ko'

function App() {

  const [timer, setTimer] = useState(dayjs());
  timer.format();

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(dayjs())
    }, 1000);

    return () => {
      clearInterval(interval)
    }
  }, [timer]);

  return (
    <div className="App">
      {/* 컨테이너 */}
      <div className="wrapper">

        {/* 헤더 */}
        <header className="header">
          <h2>toDoList</h2>
          <p>{timer.format("YYYY. MM. DD HH:mm:ss")}</p>
        </header>

        {/* 입력창 */}
        <div className="input">
          <input className="input-box" />
          <button>입력</button>
        </div>

      </div>
    </div>
  );
}

export default App;
