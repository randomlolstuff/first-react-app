import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TrackerBoxes from "./casesBoxes";
import ChartRow from "./chartRow";
const axios = require("axios");

const State = ({ masterData }) => {
  let recordExist = false;
  let totalConfirmed = 0;
  let totalDeceased = 0;
  let totalRecovered = 0;
  let totalCases = {};
  let { id } = useParams();
  id = id.toUpperCase();
  let selectedStateData = {};

  if (masterData.masterData[id]) {
    selectedStateData = masterData.masterData[id];
    totalConfirmed = selectedStateData.total.confirmed;
    totalDeceased = selectedStateData.total.deceased;
    totalRecovered = selectedStateData.total.recovered;
    totalCases = { totalConfirmed, totalDeceased, totalRecovered };

    recordExist = true;
  }
  console.log(selectedStateData.districts);
  return (
    <div>
      {recordExist ? (
        <div>
          <TrackerBoxes displayCases={totalCases} />
          {Object.keys(selectedStateData.districts).map((item) => {
            return (
              <ChartRow
                stateName={item}
                totalCases={selectedStateData.districts[item].total}
              />
            );
          })}
        </div>
      ) : (
        <div>url not found</div>
      )}
    </div>
  );
};
export default State;
