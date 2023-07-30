import React, { useEffect, useState } from "react";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import "./styles/App.scss";
import axios from "axios";
import PageLayout from "./components/PageLayout";
import Loading from "./components/Loading";
import { useData } from "./components/DataContext";
import ViewModal from "./components/ViewModal";

const App = () => {
  const { dispatch, state } = useData();
  const [selectedItem, setSelectedItem] = useState("");
  const [cardsData, setCardsData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sidebarModal, setSidebarModal] = useState(false);

  const setValues = async (results) => {
    // console.log(results);
    let data = [];
    for (let i = 0; i < 6; i++) {
      switch (selectedItem) {
        case "people":
          data.push({
            a: results[i].name,
            b: results[i].birth_year,
            c: results[i].gender,
          });
          break;
        case "planets":
          data.push({
            a: results[i].name,
            b: results[i].climate,
            c: results[i].gravity,
          });
          break;
        case "films":
          data.push({
            a: results[i].title,
            b: results[i].release_date,
            c: `https://picsum.photos/200/300?random=${i + 1}`,
          });
          break;
        case "species":
          data.push({
            a: results[i].name,
            b: results[i].homeworld,
            c: results[i].average_lifespan,
          });
          break;
        case "vehicles":
          data.push({
            a: results[i].name,
            b: results[i].model,
            c: results[i].max_atmosphering_speed,
          });
          break;
        case "starships":
          data.push({
            a: results[i].name,
            b: results[i].model,
            c: results[i].hyperdrive_rating,
          });
      }
    }
    switch (selectedItem) {
      case "people":
        dispatch({
          type: "ADD_HEADINGS",
          payload: ["Name", "Birth Year", "Gender"],
        });
        break;
      case "planets":
        dispatch({
          type: "ADD_HEADINGS",
          payload: ["Name", "Climate", "Gravity"],
        });
        break;
      case "films":
        dispatch({
          type: "ADD_HEADINGS",
          payload: ["Title", "Release Date", "Poster Image"],
        });
        break;
      case "species":
        dispatch({
          type: "ADD_HEADINGS",
          payload: ["Name", "HomeWorld", "LifeSpan"],
        });
        break;
      case "vehicles":
        dispatch({
          type: "ADD_HEADINGS",
          payload: ["Name", "Model", "Top Speed"],
        });
        break;
      case "starships":
        dispatch({
          type: "ADD_HEADINGS",
          payload: ["Name", "Model", "HyperDrive Rating"],
        });
        break;
      default:
        break;
    }
    dispatch({ type: "SETITEM", payload: selectedItem });
    dispatch({ type: "ADD_AllDATA", payload: results });
    dispatch({ type: "ADD_VALUE", payload: data });
    // console.log(data);
  };
  const getCardsData = async () => {
    try {
      setLoading(true);
      setCardsData([]);
      // const { data } = await axios.get(`https://swapi.dev/api/${selectedItem}`);
      const { data } = await axios.get(
        `https://shubhamlahoti01.github.io/starwars-json-api/${selectedItem}.json`
      );
      const { results } = data;
      setCardsData(results);
      setValues(results);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    if (selectedItem !== "") {
      getCardsData();
      setTimeout(() => {
        setLoading(false);
      }, 600);
    } else {
      setCardsData([]);
      setLoading(false);
    }
  }, [selectedItem]);

  return (
    <div className="App">
      {state.showView ? (
        <ViewModal />
      ) : (
        <>
          <Header setSidebarModal={setSidebarModal} />
          <div className="page">
            <Sidebar
              selectedItem={selectedItem}
              setSelectedItem={setSelectedItem}
              cardsData={cardsData}
              sidebarModal={sidebarModal}
              setSidebarModal={setSidebarModal}
            />
            {loading ? (
              <Loading />
            ) : (
              <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path="/view" element={<ViewModal />} /> */}
                <Route path="/" element={<PageLayout />}>
                  <Route path="people" element={<></>} />
                  <Route path="planets" element={<></>} />
                  <Route path="films" element={<></>} />
                  <Route path="species" element={<></>} />
                  <Route path="vehicles" element={<></>} />
                  <Route path="starships" element={<></>} />
                </Route>
              </Routes>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default App;
