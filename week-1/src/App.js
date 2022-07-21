import React, { useState } from 'react';
import {Route} from "react-router-dom";
import './App.css';
import MyWeek from './MyWeek';
import Detail from './Detail';


function App() {

  const [week, setWeek] = useState(['월', '화', '수', '목', '금', '토', '일']); // eslint-disable-line no-unused-vars
  const [circleNum, setCircleNum] = useState([0, 1, 2, 3, 4]); // eslint-disable-line no-unused-vars

return (

  <div className='Box'>

    <Route path="/" exact>
      <MyWeek week={week} circleNum={circleNum} />
    </Route>
    <Route path="/detail/:index">
      <Detail week={week} circleNum={circleNum} />
    </Route>

  </div>
 )

}

export default App;