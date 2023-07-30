import React, { useEffect } from "react";
import List from "./List";
import { useData } from "./DataContext";

const People = () => {
  const { state } = useData();
  // console.log(cardsData, selectedItem);
  // const { dispatch } = useData();
  // let data = [];
  // for (let i = 0; i < 6; i++) {
  //   let { name, birth_year, gender, url } = cardsData[i];
  //   data.push({ a: name, b: birth_year, c: gender, d: url });
  // }
  // console.log(data);
  // useEffect(() => {
  //   dispatch({ type: "ADD_VALUE", payload: data });
  // }, []);

  return (
    <>
      <List
        headings={state.headings}
        data={state.value}
        cardsData={state.allData}
        selectedItem={state.selectedItem}
      />
    </>
  );
};

export default People;
