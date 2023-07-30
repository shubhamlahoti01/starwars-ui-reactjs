import React from "react";
import { MdOutlineClose } from "react-icons/md";
import "../styles/viewModal.scss";
import { useData } from "./DataContext";
import { useNavigate } from "react-router-dom";

const ViewModal = () => {
  const { state, dispatch } = useData();
  const { value, valueHeadings, selectedItem, i } = state;
  const navigate = useNavigate();
  return (
    <div className="view-modal-background">
      <div className="view-modal">
        <div className="v-m-head">
          <h2>{selectedItem} Details</h2>
          <MdOutlineClose
            color="white"
            onClick={() => {
              dispatch({ type: "UNSETI" });
              navigate(`/${selectedItem}`);
            }}
          />
        </div>
        <div className="view-modal-content">
          <div className="left-view">
            <img
              src={`https://picsum.photos/200/300?random=${Math.floor(
                Math.random() * 6 + 1
              )}`}
              alt="view-image"
            />
          </div>
          <div className="right-view">
            <li>
              <h4>{valueHeadings[0]}</h4>
              <div>{value[i].a}</div>
            </li>
            <li>
              <h4>{valueHeadings[1]}</h4>
              <div>{value[i].b}</div>
            </li>
            <li>
              <h4>{valueHeadings[2]}</h4>
              <div>{value[i].c}</div>
            </li>
          </div>
        </div>
        <div className="v-m-foot">
          <button
            onClick={() => {
              dispatch({ type: "UNSETI" });
              navigate(`/${selectedItem}`);
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewModal;
