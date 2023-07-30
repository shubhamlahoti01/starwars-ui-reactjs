import React from "react";
import List from "./List";

const Planets = ({ cardsData, selectedItem }) => {
  const data = [];
  for (let i = 0; i < 6; i++) {
    let { name, climate, gravity, url } = cardsData[i];
    data.push({ a: name, b: climate, c: gravity, d: url });
  }
  console.log(data);
  return (
    <>
      <List
        headings={["Name", "Climate", "Gravity"]}
        data={data}
        selectedItem={selectedItem}
      />
    </>
  );
};

export default Planets;
