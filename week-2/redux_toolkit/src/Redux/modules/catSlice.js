import { createSlice } from "@reduxjs/toolkit";

const catSlice = createSlice({
    name: "cat",
    initialState: {
        name: "펄이 고양이",
        age: 5,
    },
    reducers: {
        changeName: (state, action) => {
            state.name = action.payload;
            //툴킷 : immer라고 하는 불변성 유지 패키지를 이미 가지고 있으므로, 스프레드문법/새 객체 생성 안 해도 됨

        }
    }
})

export const {changeName} = catSlice.actions;
export default catSlice.reducer;