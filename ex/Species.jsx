import React from "react";
import List from "./List";

const Species = ({ cardsData, selectedItem = "" }) => {
  // console.log(cardsData);
  const data = [];
  for (let i = 0; i < 6; i++) {
    let { name, homeworld, average_lifespan, url } = cardsData[i];
    data.push({
      a: name,
      b: homeworld,
      c: average_lifespan,
      d: url,
    });
  }
  // console.log(data);
  return (
    <>
      <List
        selectedItem={selectedItem}
        headings={["Name", "HomeWorld", "LifeSpan"]}
        data={data}
      />
    </>
  );
};

export default Species;
