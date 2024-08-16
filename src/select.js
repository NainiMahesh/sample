import React, { useState } from "react";

const Select = () => {
    const [choose, setChoose] = useState("Choose Value")
    const handleChange =((e)=>{setChoose(e.target.value)})
  return (
    <>
      <div>{choose}</div>
      <select value={choose} onChange={handleChange}>
        <option>Apple</option>
        <option>Mango</option>
        <option>Orange</option>
        <option>potato</option>
        <option>tomato</option>
      </select>
    </>
  );
};

export default Select;
