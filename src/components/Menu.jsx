import React, { useEffect, useRef, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import "../styles/menu.scss";
import { AiOutlineEye } from "react-icons/ai";
import {
  PiDownloadSimpleLight,
  PiFolders,
  PiLockSimple,
  PiPencilSimple,
} from "react-icons/pi";
import { GoShareAndroid } from "react-icons/go";
import { RiDeleteBinLine } from "react-icons/ri";
import DeleteModal from "./DeleteModal";
import { useData } from "./DataContext";

const Menu = ({ i }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  // const [showView, setShowView] = useState(false);
  const position = { top: 15, right: 15 };
  const menuRef = useRef(null);
  const handleClick = () => {
    // const rect = event.target.getBoundingClientRect();
    // console.log(rect);
    setOpenMenu(!openMenu);
  };
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setOpenMenu(false);
    }
  };
  const { dispatch } = useData();
  // const navigate = useNavigate();
  const handleView = () => {
    // setShowView(true);
    dispatch({ type: "SETI", payload: { i: i, showView: true } });
    // navigate("view");
  };
  const handleDelete = () => {
    setShowDelete(true);
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <button ref={menuRef} onClick={handleClick} className="menu-btn">
        <BsThreeDotsVertical size={16} />
        <div
          className={`menu ${openMenu ? "active-menu" : ""}`}
          style={{
            top: position.top + "px",
            right: position.right + "px",
          }}
        >
          <li onClick={handleView}>
            <AiOutlineEye />
            <p>View</p>
          </li>
          <li>
            <PiDownloadSimpleLight />
            <p>Download</p>
          </li>
          <li>
            <PiPencilSimple />
            <p>Rename</p>
          </li>
          <li>
            <GoShareAndroid />
            <p>Share Link</p>
          </li>
          <li>
            <PiFolders />
            <p>Move</p>
          </li>
          <li>
            <PiLockSimple />
            <p>Mark Private</p>
          </li>
          <li onClick={handleDelete}>
            <RiDeleteBinLine color="red" />
            <p style={{ color: "red" }}>Delete</p>
          </li>
        </div>
      </button>
      {showDelete && <DeleteModal i={i} setShowDelete={setShowDelete} />}
      {/* {showView && (
        <ViewModal
          setShowView={setShowView}
          cardsData={cardsData}
          i={i}
          selectedItem={selectedItem}
        />
      )} */}
    </>
  );
};

export default Menu;
