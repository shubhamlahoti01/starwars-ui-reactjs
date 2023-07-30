import React from "react";
import "../styles/deleteModal.scss";
import { LuAlertCircle } from "react-icons/lu";
import { useData } from "./DataContext";

const DeleteModal = ({ i, setShowDelete }) => {
  const { state } = useData();
  return (
    <div className="modal-background">
      <div className="modal-content">
        <div className="delete-icon">
          <LuAlertCircle />
        </div>
        <h3>Caution!</h3>
        <p>
          Are you sure you want to Delete <span>{state?.value[i]?.a}</span>
        </p>
        <div className="delete-modal-btns">
          <button
            className="delete-modal-btn"
            onClick={() => setShowDelete(false)}
          >
            Cancel
          </button>
          <button
            className="delete-modal-btn"
            onClick={() => setShowDelete(false)}
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
