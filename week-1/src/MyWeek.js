import React, { useState } from 'react'; // eslint-disable-line no-unused-vars
import { useHistory } from "react-router-dom"; 

const MyWeek = (props) => {
    const history = useHistory();

    const week_rates = props.week.map((day, idx) => {
        return {
            day : day,
            rate : Math.floor(Math.random()*5)+1
        };
    });


    const [reset, setReset] = useState(0) // eslint-disable-line no-unused-vars

    const random = Math.floor(Math.random()*5)+1;
    const [grade, setGrade] = React.useState(random)

    const Delete = () => {
        
        // setGrade(grade - grade);
        setGrade (+false)
        //false(불린함수)에 연산기호를 붙이면 숫자를 출력한다.

    };


    return (
        <>
            <div>
            <h3>내 <span style={{color : 'rgb(47, 118, 216)'}}>일주일</span>은?</h3>

            {week_rates.map((day, i) => {

                return (

                <div key={i} className='line'> 
                {/* 사용될 요소의 최상위 요소에 key값 부여!! */}

                    <div > {day.day} </div>

                     <div id ="circles">
                        {props.circleNum.map((cur, idx) => {
                            return <div key={idx} className='circle' style = {{backgroundColor: day.rate > idx ? ("cadetblue") : ("#DDDDDD")}}></div>
                        })}
                     </div>
                    
                     <button onClick={() => { 
                        history.push("/detail/"+i) }} />
                </div>
                )
            })}
            </div>
            <div id="grade">
                <p>평균 평점</p>
                <div>{grade}</div>
            </div>
            <div>
                <button className='reset' onClick={Delete}>reset</button>
            </div>
        </>
    );
}
export default MyWeek;