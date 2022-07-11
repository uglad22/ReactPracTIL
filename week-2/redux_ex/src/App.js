import './App.css';

import { useSelector, useDispatch } from "react-redux";
//useSelector로 구독, useDispatch로 수정요청

import {changeName} from "./Redux/modules/cat";

function App() {
  const cat = useSelector(state => state.cat);
//가져오기
  console.log(cat);

  const dispatch = useDispatch();

  return (
    <div className="App">
      <p>name::::{cat.name}</p>
      <button onClick={() => {

        dispatch(changeName("루비"));
      }}>이름 바꾸기</button>
    </div>
  );
}

export default App;
