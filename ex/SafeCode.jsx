// import React, { useState } from "react";
// import "../styles/people.scss";
// import { HiViewList } from "react-icons/hi";
// import { BsFillGridFill, BsThreeDotsVertical } from "react-icons/bs";
// import Cards from "./Cards";
// import List from "./List";

// const People = ({ selectedItem, cardsData }) => {
//   const [view, setView] = useState("grid");

//   return (
//     <div className="container">
//       <div className="nav">
//         <h1>{selectedItem}</h1>
//         <div className="view-cont">
//           <div
//             className={`view-box ${view === "grid" ? "active" : ""}`}
//             onClick={() => setView("grid")}
//           >
//             <BsFillGridFill size={18} />
//             <p>{view !== "grid" && "Grid"}</p>
//           </div>
//           <div
//             className={`view-box ${view === "list" ? "active" : ""}`}
//             onClick={() => setView("list")}
//           >
//             <HiViewList size={23} />
//             <p>{view !== "list" && "List"}</p>
//           </div>
//         </div>
//       </div>
//       {view === "grid" && <Cards cardsData={cardsData} />}
//       {view === "list" && <List cardsData={cardsData} />}
//     </div>
//   );
// };

// export default People;
// --------------------------------------------
// .container {
//     width: 100%;
//     // min-height: 80%;
//     height: 100%;
//     // height: 80vh;

//     // border: 2px solid yellow;
//     display: flex;
//     flex-direction: column;
//     // justify-content: space-evenly;
//     padding: 0 20px 50px 20px;

//     .nav {
//       display: flex;
//       width: 100%;
//       justify-content: space-between;
//       align-items: center;
//       margin-bottom: 1rem;
//       h1 {
//         font-weight: 400;
//       }
//       .view-cont {
//         background-color: white;
//         height: 2rem;
//         width: 10%;
//         padding: 2px;
//         //   border: 2px solid white;
//         display: flex;
//         justify-content: space-between;
//         align-items: center;
//         border-radius: 5px;
//         //   padding: 8px;
//         .view-box {
//           cursor: pointer;
//           display: flex;
//           border-radius: 5px;
//           justify-content: center;
//           align-items: center;
//           width: 100%;
//           height: 100%;
//           padding-inline: 5px;
//           color: #03123d;

//           &.active {
//             background-color: #03123d;
//             color: white;
//           }
//           p {
//             font-size: 18px;
//           }
//         }
//       }
//     }

//     .cards {
//       display: flex;
//       justify-content: space-around;
//       flex-wrap: wrap;
//       // border: 2px solid white;
//       width: 100%;
//       height: 80%;
//       .card {
//         height: 35vh;
//         // border: 2px solid red;
//         width: 320px;
//         overflow: hidden;
//         padding-bottom: 20px;
//         img {
//           height: 75%;
//           width: 100%;
//           background-position: center;
//           background-repeat: no-repeat;
//           background-size: cover;
//           border-radius: 5px;
//         }
//         .card-footer {
//           height: 23%;
//           padding-inline: 10px;
//           border-radius: 5px;
//           background-color: rgba(249, 250, 253, 0.2);
//           color: white;
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           .card-footer-detail {
//             display: flex;
//             align-items: center;
//             h3 {
//               font-size: 15px;
//               padding-left: 10px;
//               font-weight: 400;
//             }
//           }
//           button {
//             display: flex;
//             border: none;
//             padding: 5px;
//             border-radius: 5px;
//             align-items: center;
//             justify-content: center;
//             background-color: #515d78;
//             svg {
//               color: white;
//             }
//           }
//         }
//       }
//     }
//   }
