import React from "react";

const TrackerBoxes = ({ displayCases }) => {
  return (
    <div>
      <div>
        <div>Total confirmed</div>
        <div>{displayCases.totalConfirmed}</div>
      </div>
      <div>
        <div>Recovered</div>
        <div>{displayCases.totalRecovered}</div>
      </div>
      <div>
        <div>Deceased</div>
        <div>{displayCases.totalDeceased}</div>
      </div>
    </div>
  );
};

export default TrackerBoxes;
