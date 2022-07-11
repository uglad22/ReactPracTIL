import React from 'react';
import './App.css';
import {TextBox, Input, Button} from './HookPrac';
import useCustomHook from './useCustomHook';

function App() {

  const input_ref = React.useRef(null);
  //input 값을 가져오기 위해서 useRef를 사용! 모든 곳에서 참조해서 사용하기 위해 부모(||최상단)에 선언
  // const [text, setText] = React.useState(""); //커스텀 훅 만들면서 주석 처리!
  const [text, setText] = useCustomHook("");

  return (
    <div className="App">
      <div>
        <TextBox text={text}/>
      </div>

      <div>
        <Input input_ref={input_ref} /> {/* input ref 값 넘겨주기 */}
        <Button input_ref={input_ref} setText={setText}/>
        {/* 버튼 눌렀을 때에도 값이 필요하므로 같이 넘겨주기, input 값 추가해줘야 하므로 변경 가능한 setText */}
      </div>
    </div>
  );
}

export default App;
