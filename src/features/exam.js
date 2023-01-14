import { create, createSlice } from "@reduxjs/toolkit";

const initialStateValue = { name: "", age: 0, email: ""};

export const examSlice = createSlice({
    name: "exam",
    initialState: { value: [
        { qno: 1, question: "what is a noun?", answer: 'a', options: { a: "ade", b: "joy", c: "go"}},
        { qno: 2, question: "what is a pronoun?", answer: 'b', options: { a: "ade", b: "she", c: "go"}},
        { qno: 3, question: "what is a adjective?", answer: 'a', options: { a: "happy", b: "joy", c: "go"}},
        { qno: 4, question: "what is a verb?", answer: 'a', options: { a: "ade", b: "joy", c: "go"}},
        { qno: 5, question: "what is a proposition?", answer: 'a', options: { a: "ade", b: "joy", c: "go"}}
    ]},
    reducers: {
        getExam: (state, action) => {
            state.value = action.payload;
        }
    },
});

export const { getExam } = examSlice.actions;

export default examSlice.reducer; 