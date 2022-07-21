import React, { useState } from 'react'; // eslint-disable-line no-unused-vars
import "./App.css";
import { useHistory } from "react-router-dom";
import { useParams } from 'react-router-dom';

const Detail = (props) => {

    const history = useHistory();
    const {index} = useParams();
    const [click] = useState([1, 2, 3, 4, 5]); // eslint-disable-line no-unused-vars

    const [idx,setIdx] = useState(); 

    return (
        <>
             <div>
                <h3 className='days'>
                    <span>{props.week[index]}요일</span> 평점 남기기
                </h3>
                <div id ="circles" style={{marginTop : '20px', marginRight : '10px'}}>
                        {click.map((e, i) => {
                            return (<div className='circle' key={i} onClick={() => { setIdx(i);}}
                            style = {{backgroundColor:i <= idx ? ("cadetblue") : ("#DDDDDD")}}></div>)
                        })}
                </div>
            </div>
            <div>
            <button className='registraion' onClick={() => { 
                        history.push("/") }}>평점 남기기</button>
            </div>
        </>
        );

}

export default Detail;