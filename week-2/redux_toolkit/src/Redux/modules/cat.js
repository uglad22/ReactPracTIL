const CAHNGE_NAME = "cat/CHANGE_NAME";

const initial_stara = {name: "펄이 고양이", age: 5};
//초기상태값 만들기


export const changeName = (name) => {
    return {type: CAHNGE_NAME, name};
}
//액션 생성 함수 만들기


export default function reducer(state = initial_stara, action = {}){
    switch(action.type){
        case "cat/CHANGE_NAME": {
            return {...state, name: action.name}
        }
    //액션 생성 함수에서 return한 값이 들어옴. 액션 생성 함수에 있는 name을 바꿔줄 예정!
        default:
            return state;
    }
}