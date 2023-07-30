import React, { useState } from "react";
import "../styles/layout.scss";
import { HiViewList } from "react-icons/hi";
import { BsFillGridFill } from "react-icons/bs";
import Cards from "./Cards";
import { Outlet } from "react-router-dom";
import { useData } from "./DataContext";
import List from "./List";

const PageLayout = () => {
  const { state } = useData();
  const { selectedItem, value, valueHeadings, allData: cardsData } = state;

  const [view, setView] = useState("grid");
  return (
    <div className="container">
      <div className="nav">
        <h1>{selectedItem}</h1>
        <div className="view-cont">
          <div
            className={`view-box ${view === "grid" ? "active" : ""}`}
            onClick={() => setView("grid")}
          >
            <BsFillGridFill />
            <p>{view !== "grid" && "Grid"}</p>
          </div>
          <div
            className={`view-box ${view === "list" ? "active" : ""}`}
            onClick={() => setView("list")}
          >
            <HiViewList />
            <p>{view !== "list" && "List"}</p>
          </div>
        </div>
      </div>
      {view === "grid" && (
        <Cards cardsData={cardsData} selectedItem={selectedItem} />
      )}
      {view === "list" && (
        <List
          headings={valueHeadings}
          data={value}
          cardsData={cardsData}
          selectedItem={selectedItem}
        />
      )}
    </div>
  );
};

export default PageLayout;
