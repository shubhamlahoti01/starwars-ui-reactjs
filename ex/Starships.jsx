import React from "react";
import List from "./List";

const Starships = ({ cardsData, selectedItem }) => {
  const data = [];
  for (let i = 0; i < 6; i++) {
    let { name, model, hyperdrive_rating, url } = cardsData[i];
    data.push({
      a: name,
      b: model,
      c: hyperdrive_rating,
      d: url,
    });
  }
  return (
    <>
      <List
        selectedItem={selectedItem}
        headings={["Name", "Model", "HyperDrive Rating"]}
        data={data}
      />
    </>
  );
};

export default Starships;
