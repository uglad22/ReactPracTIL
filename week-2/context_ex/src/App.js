import './App.css';
import React, { useState } from 'react';

//ContextAPI : 변경이 많지 않은 데이터를 사용할 때, 너무 많은 스토어를 사용하지 않을 때(규모가 작을 때) 쓰는 것이 적합

const MyStore = React.createContext();
//저장할 공간 만들어주기. 이름은 아무거나. 파일을 따로 지정해줘도 좋음
function App() {
  const [name, setName] = React.useState();
  return (
    <div className="App">
      <MyStore.Provider value={{name: name, setName: setName}}> {/* 키:밸류가 같으면==={name, setName}이라고 키 값만 써줘도 됨}
      {/* {name: "uglad2"} => 넣어줄 데이터*/}
        {/* <MyStore.Consumer>
          {(value)=> {
            return (<div>{value.name}</div>)
          }}
        </MyStore.Consumer> 데이터 구독해서 화면에 뿌려주기! */}
           <MyStoreConsumer />
           {/*외부에서 가져오는 방법(useContext 사용)*/}
      </MyStore.Provider>
      {/*만든 컨텍스트 안에 있는 프로바이더를 사용해서 데이터를 주입한다*/}

    </div>
  );
}

const MyStoreConsumer = () => {
  const { name, setName } = React.useContext(MyStore);
  return (
    <div>
      <h1>{name}</h1>
      <button onClick={()=> {setName("ㅁㅁㅁ")}}>이름 바꾸기</button>
    </div>
  );
} //외부에서 가져오는 방법(useContext 사용)


export default App;