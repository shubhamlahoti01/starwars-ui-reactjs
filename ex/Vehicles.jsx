import React from "react";
import List from "./List";
import { useData } from "./DataContext";

const Vehicles = () => {
  const { state } = useData();
  return (
    <>
      <List
        selectedItem={state.selectedItem}
        headings={state.valueHeadings}
        data={state.value}
      />
    </>
  );
};

export default Vehicles;
