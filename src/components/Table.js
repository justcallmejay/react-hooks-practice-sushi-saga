import React from "react";


//if there is not plates prop (in App) then plates is equal to an empty array
function Table({ plates = [], money }) {
  // renders an empty plate for every element in the array
  const emptyPlates = plates.map((_, index) => (
    <div key={index} className="empty-plate" style={{ top: -7 * index }} />
  ));

  // let num = 100

  return (
    <>
      <h1 className="remaining">
        You have: ${money} remaining!
      </h1>
      <div className="table">
        <div className="stack">{emptyPlates}</div>
      </div>
    </>
  );
}

export default Table;
