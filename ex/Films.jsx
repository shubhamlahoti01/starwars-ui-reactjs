import React from "react";
import List from "./List";

const Films = ({ cardsData, selectedItem }) => {
  // console.log(cardsData);
  const data = [];
  for (let i = 0; i < 6; i++) {
    let { title, release_date, url } = cardsData[i];
    data.push({
      a: title,
      b: release_date,
      c: `https://picsum.photos/200/300?random=${i + 1}`,
      d: url,
    });
  }
  console.log(data);
  return (
    <>
      <List
        selectedItem={selectedItem}
        headings={["Title", "Release Date", "Poster Image"]}
        data={data}
      />
    </>
  );
};

export default Films;
