import React from "react";
const SelectZone = ({ setZone, countries }) => {

  return (
    <div className="content-container">
      {/* select goes here  */}
      <h1>World Clock</h1>
      <select data-testid="select-element" onChange={(event) => setZone(event.target.value)}>
        {countries.map(country => <option value={country.zone}> {country.capital} </option>)}
      </select>
    </div>
  );
};

export default SelectZone;
