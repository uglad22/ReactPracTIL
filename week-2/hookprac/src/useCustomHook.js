import React from "react";

 /* custom hook 사용시 주의사항
    1. 커스텀 훅의 함수명은 use로 시작할 것!
    2. 사용할 땐 : 컴포넌트 최상위에서만, 리액트 함수 안에서만 호출할 것(커스텀 훅 안에서 호출 가능!)
    3. 리턴을 꼭 해줄 것 */

const useCustomHook = (initial = "") => { 
    // ref값 가져온 걸로,
    // state를 바꿔주자!

    const [text, setText] = React.useState(initial);

    const changeText = (_ref) => {

        // const value = _ref.current?.value;
        //옵셔널 체이닝 : 만약에 value가 있으면 가져오고, 아니면 오류내지말고 undefined 반환해
        const value = _ref.current? _ref.current.value : "";
        //삼항연산자 : current 있으면 value 가져오고, 아니면 공란으로 해

        if(value && value !== "") { //""이면 안돼!
            setText(value)
            console.log("!!!!!!!!");
            _ref.current.value = "";
        }

    }

 return [text, changeText];

}
//App에서 이 컴포넌트(커스텀 훅)를 불러서-> 다른 컴포넌트에다가 넘겨주면서 마음대로 사용!
export default useCustomHook;
//디폴트로 하는 이유 ? 어차피 커스텀 훅 하나밖에 없어서^~^