import { useCounter } from "CounterContex/CounterContex";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, changePace } from 'redux/actions';


export function Counter() {
//     const {
//       value: { counter },
//       decrement,
//       increment,
//     } = useCounter();
//    console.log(decrement, increment);
//     return (
//       <>
//         <button type="button" onClick={decrement}>
//           -
//         </button>
//         <h1>{counter}</h1>
//         <button type="button" onClick={increment}>+</button>
//       </>
//     );
    const {counter, pace} = useSelector((state) => state);
    const dispatch = useDispatch();
    
     return (
       <>
         <input
           type="number"
           onChange={e => dispatch(changePace(+e.currentTarget.value))}
         />

         <button type="button" onClick={() => dispatch(decrement(pace))}>
           -
         </button>
         <h1>{counter}</h1>
         <button type="button" onClick={() => dispatch(increment(pace))}>
           +
         </button>
       </>
     );

}