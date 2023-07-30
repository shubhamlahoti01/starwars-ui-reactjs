import React from "react";
import Menu from "./Menu";
import { Icons } from "./Icons";
const None = () => <></>;
const Cards = ({ cardsData, selectedItem }) => {
  const Icon = Icons[`${selectedItem}`];
  return (
    <div className="cards">
      {cardsData.map((ele, i) => {
        if (i >= 6) return <None key={i}></None>;
        return (
          <div className="card" key={i}>
            <img
              src={`https://picsum.photos/200/300?random=${i + 1}`}
              alt="imagebanner"
            />

            <div className="card-footer">
              <div className="card-footer-detail">
                <Icon size={22} />
                <h3>
                  {ele.name}
                  {ele.title}
                </h3>
              </div>
              <Menu cardsData={cardsData} i={i} selectedItem={selectedItem} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
