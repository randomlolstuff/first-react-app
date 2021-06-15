import React from "react";

const ChartRow = (props) => {
  return (
    <div>
      {props.name ? (
        <a href={`/state/${props.stateName}`}>
          {props.stateName + "-" + props.name}
        </a>
      ) : (
        <div>{props.stateName}</div>
      )}
      <div>
        {props.totalCases.confirmed ? props.totalCases.confirmed : "NA"}
      </div>
      <div>
        {props.totalCases.recovered ? props.totalCases.recovered : "NA"}
      </div>
      <div>{props.totalCases.deceased ? props.totalCases.deceased : "NA"}</div>
    </div>
  );
};
export default ChartRow;
