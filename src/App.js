import './App.scss';
import './App.css';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs'
import 'dayjs/locale/ko'
import { AiFillEdit } from 'react-icons/ai';

function App() {

  let [timer, setTimer] = useState(dayjs());
  timer.format();
  let [list, setList] = useState('');
  let [addList, setAddList] = useState([]);

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

        { }

        {/* 입력창 */}
        <div className="input">
          <input onChange={(e) => {
            setList(e.target.value)
          }} className="input-box" />
          <button onClick={() => {
            let copyList = [...addList];
            copyList.unshift(list);
            setAddList(copyList);
            console.log(addList);
          }}><AiFillEdit size="16" color="534444" /></button>
        </div>

        {/* 할 일 목록 */}
        {
          addList.map(function (item, idx) {
            return (
              <div className="todo" key={idx}>
                <p className="todo-box">
                  <p className="todo-list">{addList[idx]}</p>
                  <div>{timer.format("YYYY. MM. DD")} <button>수정</button><button onClick={() => {
                    let delList = [...addList];
                    delList.splice(idx, 1);
                    setAddList(delList);
                  }}>삭제</button></div>
                </p>
              </div>
            )
          })
        }

      </div>
    </div>
  );
}

export default App;
