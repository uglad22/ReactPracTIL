import React from 'react';

export const TextBox = ({ text }) => {

    return (
        <>
            <div className='textbox'>
             <pre>{text}</pre> {/* pre태그 : 텍스트에 사용된 여백과 줄바꿈을 그대로 출력 가능! */}
             {/* 부모에서 넘겨준 text 값을 그대로 출력해준다 */}
            </div>
        </>
    )
}

export const Input = ({ input_ref }) => {

    return (
        <input ref={input_ref} />
    )
}

export const Button = ({ input_ref, setText }) => {
    return (
        <button onClick={() => {
        //    console.log(input_ref.current.value)
        //    setText(input_ref.current.value) //setText에 받은 input_ref 값 넘겨주기
            setText(input_ref); //커스텀 훅에서 쓰려고 바꿔줌
            // input_ref.current.value = ""; //input 값은 공란으로 clear!
            // 커스텀 훅으로 옮겨줌
        }}>완성</button>

    )
}