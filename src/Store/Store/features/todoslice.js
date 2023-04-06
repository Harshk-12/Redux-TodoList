import { createSlice } from "@reduxjs/toolkit";
let todoslice = createSlice({

    name: 'todo',
    initialState: {
        inputvalue: '',
        addedvalues: [],
        editvalue: null,
        deletevalue: [],
        
    },
    reducers: {
        setinputvalue: (state, action) => { state.inputvalue = action.payload },
        setaddedvalue: (state, action) => {
            (state.editvalue !== null) ? (state.addedvalues[state.editvalue] = state.inputvalue, state.editvalue = null)
                : (state.addedvalues = [...state.addedvalues, action.payload])
        },
        // :(state.addedvalues=state.addedvalues.push(action.payload) )

        setedit: (state, action) => {
            state.editvalue = action.payload;
            // state.addedvalues[action.payload]=setinputvalue(action.payload) 

            state.inputvalue = state.addedvalues[action.payload]

        },

        clear: (state, action) => {

            let newlist = state.addedvalues.filter((item, index) => {
                return index !== action.payload

            })
            console.log(newlist)
            state.addedvalues = newlist
        }


      
    }
})





export default todoslice.reducer;
export const { setaddedvalue, setinputvalue, setedit, clear } = todoslice.actions;
