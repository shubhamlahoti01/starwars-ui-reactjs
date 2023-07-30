import React from "react";
import "../styles/sidebar.scss";
// import axios from "axios";
import { AiFillFolder } from "react-icons/ai";
import { IoIosArrowForward, IoIosArrowUp } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { CgClose } from "react-icons/cg";
import { Icons } from "./Icons";

const Sidebar = ({
  selectedItem,
  setSelectedItem,
  cardsData,
  sidebarModal,
  setSidebarModal,
}) => {
  const Icon = Icons[`${selectedItem}`];

  const navigate = useNavigate();
  const menuData = [
    "people",
    "planets",
    "films",
    "species",
    "vehicles",
    "starships",
  ];
  const handleClick = (i) => {
    try {
      if (selectedItem !== menuData[i]) {
        setSelectedItem(menuData[i]);
        navigate(menuData[i]);
      } else {
        setSelectedItem("");
        navigate("/");
      }
      setSidebarModal(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={`sidebar ${sidebarModal ? "showSidebarModal" : ""}`}>
      {menuData &&
        menuData.map((ele, i) => {
          return (
            <div className="main-item-div" key={i}>
              <div
                className={`outer-btn ${selectedItem === ele ? "active" : ""}`}
                onClick={() => handleClick(i)}
              >
                <div className="inner-btn">
                  <AiFillFolder size={25} />
                  <h4>{ele}</h4>
                </div>
                {selectedItem === ele ? (
                  <IoIosArrowUp size={25} />
                ) : (
                  <IoIosArrowForward size={25} />
                )}
              </div>
              {selectedItem === ele && cardsData.length > 0 && (
                <>
                  {cardsData.length > 0 && (
                    <div className="inner-data">
                      <div className="inner-data-btn">
                        <Icon size={18} />
                        <h5 style={{ fontWeight: "400" }}>
                          {selectedItem === "films"
                            ? cardsData[0].title
                            : cardsData[0].name}
                        </h5>
                      </div>
                      <IoIosArrowForward size={18} />
                    </div>
                  )}
                  {cardsData.length > 1 && (
                    <div className="inner-data">
                      <div className="inner-data-btn">
                        <Icon size={18} />
                        <h5 style={{ fontWeight: "400" }}>
                          {selectedItem === "films"
                            ? cardsData[1].title
                            : cardsData[1].name}
                        </h5>
                      </div>
                      <IoIosArrowForward size={18} />
                    </div>
                  )}
                </>
              )}
            </div>
          );
        })}
      <CgClose
        onClick={() => setSidebarModal(false)}
        className="sidebar-close"
        size={40}
      />
    </div>
  );
};

export default Sidebar;
