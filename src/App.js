import './App.scss';
import './App.css';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs'
import 'dayjs/locale/ko'
import { AiFillEdit, AiFillDelete, AiFillTool, AiFillCheckCircle } from 'react-icons/ai';
import { db } from './firebase'
import { query, collection, onSnapshot } from 'firebase/firestore'


function App() {
  let [timer, setTimer] = useState(dayjs());
  timer.format();
  let [list, setList] = useState('');
  let [addList, setAddList] = useState([]);
  let [edit, setEdit] = useState('');
  let [editIdx, setEditIdx] = useState(-1);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(dayjs())
    }, 1000);

    return () => {
      clearInterval(interval)
    }
  }, [timer]);

  // 엔터 키 이벤트
  const activeEnter = (e) => {
    if (e.key === "Enter") {
      let copyList = [...addList];
      copyList.unshift(list);
      setAddList(copyList);
      setList('');
    }
  }

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

          {/* 엔터 키 */}
          <input type="text"
            value={list}
            placeholder='Please register all your work.'
            onKeyDown={(e) => activeEnter(e)}
            onChange={(e) => {
              setList(e.target.value);
            }} className="input-box" />

          {/* 입력 버튼 */}
          <button value={list}
            onClick={() => {
              let copyList = [...addList];
              copyList.unshift(list);
              setAddList(copyList);
              setList('');
            }}>
            <AiFillEdit size="16" color="534444" />
          </button>
        </div>

        {/* 할 일 목록 */}
        {
          addList.map(function (item, idx) {
            return (
              <div className="todo" key={idx}>
                <div className="todo-box">
                  {editIdx === idx ? (
                    <input onChange={(e) => { setEdit(e.target.value) }}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          let updatedList = [...addList];
                          updatedList[idx] = edit;
                          setAddList(updatedList);
                          setEditIdx(-1);
                          setEdit('');
                        }
                      }} />
                  ) : (<p className="todo-list">
                    {addList[idx]}
                  </p>)}
                  <div>

                    {/* 날짜 */}
                    {timer.format("YYYY. MM. DD")}

                    {/* 수정 버튼 */}
                    {editIdx === idx ? (
                      <button onClick={() => {
                        let updatedList = [...addList];
                        updatedList[idx] = edit;
                        setAddList(updatedList);
                        setEditIdx(-1);
                        setEdit('');
                      }}>
                        <AiFillCheckCircle size="16" color="bbb" />
                      </button>
                    ) : (
                      <button onClick={() => {
                        setEdit(addList[idx]);
                        setEditIdx(idx);
                      }}>
                        <AiFillTool size="16" color="bbb" />
                      </button>
                    )}

                    {/* 삭제 버튼 */}
                    <button onClick={() => {
                      let delList = [...addList];
                      delList.splice(idx, 1);
                      setAddList(delList);
                    }}>
                      <AiFillDelete size="16" color="bbb" />
                    </button>
                  </div>
                </div>
              </div>
            )
          })
        }

      </div>
    </div>
  );
}

export default App;