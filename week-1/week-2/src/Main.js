import React from 'react';

function Main() {
    
    const [til_list, setTilList] = React.useState([]);
    //이 리스트는 배열이 될 거라서 기본값으로 배열[]을 넣어줌
    const title_ref = React.useRef(null);
    const content_ref = React.useRef(null);
    const time_ref = React.useRef(null);
    //useRef : input 요소에 접근

    const addTIL = () => {  /* 버튼에 함수 연결*/
        const til_data = {
            title: title_ref.current.value,
            content: content_ref.current.value,
            time: time_ref.current.value,
        } /* 콘솔로 찍어서 확인해봤던 data 넣어줌*/
        // console.log(til_data)
        setTilList([...til_list, til_data]) /* 지정해준 til_list 와 받아온 til_data를 배열에 담아줌  */
    }

    // console.log(til_list); /*리스트 추가되는 거 콘솔로 찍어보기*/
    return (
        <>
            <div className='total'>
                <div className='column'> {/* div로 묶어주면서 title과 list는 한 덩어리가 됨->세로 정렬*/}
                    <div className='title'>
                        <h1>TIL</h1>
                    </div>
                    
                    {til_list.map((til, idx) => { /* 배열을 map 함수로 펼쳐줌 */

                        return (
                            <div className='list' key={idx}> {/* 따로 붙음*/}
                                <h3>{til.title}</h3>
                                <p>{til.content}</p>
                                <p>{til.time}</p>
                            </div>
                            //map 함수로 펼친 til 값의 title, content, time 을 불러와서 보여줌
                        )
                    })}
                </div>

                <div className='add'>
                    <div>
                        <span>과목</span>
                        <input ref={title_ref} /> {/*input 값을 받아옴*/}
                    </div>
                    
                    <div>
                        <span>내용</span>
                        <input ref={content_ref} />
                    </div>

                    <div>
                        <span>공부시간</span>
                        <input ref={time_ref} />
                    </div>

                    <button onClick={
                        addTIL
                        // console.log(title_ref.current.value, content_ref.current.value, time_ref.current.value)
                        /*current의 velue 값을 받아옴(실제 입력 값) -> 콘솔로 확인해보기*/
                    }>추가하기</button>
                </div>
            </div>
        </>
    )
}

export default Main;