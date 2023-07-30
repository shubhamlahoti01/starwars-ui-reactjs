import React from "react";
import "../styles/list.scss";
import Menu from "./Menu";
import { Icons } from "./Icons";

const List = ({ headings, data, selectedItem = "", cardsData }) => {
  const Icon = Icons[`${selectedItem !== "" ? selectedItem : "people"}`];

  return (
    <div className="table-container">
      <table className="data-table">
        <thead>
          <tr>
            <th>{headings[0]}</th>
            <th>{headings[1]}</th>
            <th>{headings[2]}</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>
                <Icon size={20} />
                {item.a}
              </td>
              <td>{item.b ? item.b : "-"}</td>
              {selectedItem === "films" ? (
                <td>
                  <img
                    src={`${item.c}`}
                    alt="poster-image"
                    height={"50px"}
                    width={"100px"}
                  />
                </td>
              ) : (
                <td>{item.c ? item.c : "-"}</td>
              )}
              <td>
                <Menu
                  cardsData={cardsData}
                  i={index}
                  selectedItem={selectedItem}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;
