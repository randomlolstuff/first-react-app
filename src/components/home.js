import React, { useState } from "react";
import TrackerBoxes from "./casesBoxes";
import Chart from "./chart";
import ChartRow from "./chartRow";
import { debounce } from "./debounce";

const Home = ({ masterData }) => {
  let totalConfirmed = 0;
  let totalDeceased = 0;
  let totalRecovered = 0;
  let totalCases = {};
  const [searchString, setSearchString] = useState("");

  const stateRows = Object.keys(masterData.masterData).map((item) => {
    let stateTotal = masterData.masterData[item].total;
    if (stateTotal.confirmed)
      totalConfirmed = totalConfirmed + stateTotal.confirmed;
    if (stateTotal.recovered)
      totalRecovered = totalRecovered + stateTotal.recovered;
    if (stateTotal.deceased)
      totalDeceased = totalRecovered + stateTotal.deceased;
    console.log("name", typeof masterData.masterData[item].name);
    let name = masterData.masterData[item].name.toLowerCase();

    if (name.includes(searchString.toLowerCase()))
      return <ChartRow name={name} stateName={item} totalCases={stateTotal} />;
  });
  totalCases = { totalConfirmed, totalDeceased, totalRecovered };

  const debouncesetSearchedString = debounce((searchString) => {
    setSearchString(searchString);
    console.log(searchString);
  }, 1000);
  const handleChange = (e) => {
    debouncesetSearchedString(e.target.value);
    console.log("changed string", searchString);
  };

  return (
    <div>
      <div>home</div>
      <input
        type="text"
        id="fname"
        name="fname"
        onChange={(e) => {
          handleChange(e);
        }}
      ></input>

      <TrackerBoxes displayCases={totalCases} />
      <Chart />
      {stateRows}
    </div>
  );
};
export default Home;
