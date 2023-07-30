import React, { createContext, useContext, useReducer } from "react";

const DataContext = createContext(null);
const dataReducer = (state, action) => {
  switch (action.type) {
    case "ADD_VALUE":
      return { ...state, value: action.payload };
    case "ADD_HEADINGS":
      return { ...state, valueHeadings: action.payload };
    case "ADD_AllDATA":
      return { ...state, allData: action.payload };
    case "SETITEM":
      return { ...state, selectedItem: action.payload };
    case "SETI":
      return {
        ...state,
        i: action.payload.i,
        showView: action.payload.showView,
      };
    case "UNSETI":
      return { ...state, i: 0, showView: false };
    default:
      return state;
  }
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
};

export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, {
    selectedItem: "",
    allData: [],
    value: [],
    valueHeadings: [],
    i: 0,
    showView: false,
  });

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

// Step 6: Usage in other components
// In a component where you want to add an item to the array
// const AddItemComponent = () => {
//   const { dispatch } = useData();

//   const handleAddItem = (item) => {
// dispatch({ type: 'ADD_ITEM', payload: item });
//   };

// ... your component JSX and logic ...
// };

// In a component where you want to access the data array

// const AccessDataComponent = () => {
//   const { state } = useData();
//   const { data } = state;

// ... your component JSX and logic ...
// };

// Step 7: Wrap your app with the DataProvider in the top-level component
// const App = ()
// <DataProvider>
/* Your app components */
//   <AddItemComponent />
//   <AccessDataComponent />
// </DataProvider>

// films ["Title", "Release Date", "Poster Image"]
// people ["Name", "Birth Year", "Gender"]
// planets ["Name", "Climate", "Gravity"]
// species ["Name", "HomeWorld", "LifeSpan"]
// vehicles ["Name", "Model", "Top Speed"]
// starships ["Name", "Model", "HyperDrive Rating"]
