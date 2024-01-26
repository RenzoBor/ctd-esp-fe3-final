import { createContext, useContext, useReducer, useEffect } from 'react';
export const initialState = {theme: "light", data: []}
export const DataContext = createContext(undefined);



const dataReducer = (state, action) => {
  switch (action.type) {
    case 'SET_DATA':
      return { ...state, data: action.payload};
      case 'TOGGLE_THEME':
      return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' };
    default:
      return state;
  }
};

const fetchData = async (dispatch) => {
  dispatch({ type: 'FETCH_START' });

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    if (response.ok) {
      const result = await response.json();
      dispatch({ type: 'SET_DATA', payload: result });
    } else {
      throw new Error('Error al obtener datos de la API');
    }
  } catch (error) {
    console.log(error); ;
  }
};

const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, initialState);
  useEffect(() => {
    fetchData(dispatch);
  }, []);

  return (
    <DataContext.Provider value={{ state }}>
      {children}
    </DataContext.Provider>
  );
};

const useDataContext = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useDataContext debe ser utilizado dentro de un DataProvider');
  }
  return context;
};

export { DataProvider, useDataContext };

