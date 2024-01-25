import { useReducer, createContext } from "react";
import DentistContext from "./context";

const initialState = {data:[]};

const dataReducer = (state, action) => {

    switch (action.type) {
        case 'SET_DATA':
            return{...state, data:action.payload};
    
        default:
            return state;
    }
}

const DataProvider = ({children}) =>{
    const [state, dispatch] = useReducer(dataReducer,initialState);

    const setData = newData => {
        dispatch ({type:'SET_DATA', payload: newData});
    }
    return(
        <DentistContext.Provider value={{state, setData}}>
            {children}
        </DentistContext.Provider>
    )
}
export default DataProvider;