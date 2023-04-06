import React, { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setaddedvalue, setinputvalue, setedit, clear } from '../Store/Store/features/todoslice'
import EditIcon from '@mui/icons-material/Edit';
import ClearIcon from '@mui/icons-material/Clear';

function Todo() {

    let dispatch = useDispatch()
    let inistate = useSelector((state) => state.todo)

    let inputref = useRef(null)
    //   console.log(inistate)

    // function showtask(){
    // setaddtask([...addtask,taskvalue])
    // }


    function handlesubmit(e) {
        e.preventDefault()
        dispatch(setaddedvalue(inistate.inputvalue))
        //empty inputvalue
        dispatch(setinputvalue(''))
    }
    function handlechange(e) {
        dispatch(setinputvalue(e.target.value))
    }

    function edit(e, index) {
        e.preventDefault()
        dispatch(setedit(index))
        // dispatch(setinputvalue(e.target.value))
        inputref.current.focus()

    }

    function handleclear(e, index) {

        dispatch(clear(index))
        inputref.current.focus()

    }

    return (
        <>
            <h1>To do list</h1>
            <form action="/" onSubmit={handlesubmit} >
                <input type="text" value={inistate.inputvalue} onChange={handlechange} ref={inputref} />
                <button type='submit'>Add task</button>
            </form>
            <div>

                {inistate.addedvalues.map((item, index) => {
                    return (
                        <>
                            <ul key={index} >
                                <li >{item}<EditIcon onClick={(e) => edit(e, index)} /><ClearIcon onClick={e => handleclear(e, index)} /></li>

                            </ul>



                        </>
                    )
                })}

            </div>



        </>



    )
}
export default Todo