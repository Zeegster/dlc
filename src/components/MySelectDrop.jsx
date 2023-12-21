import React from "react";
import { useState } from "react";
import Select from "react-select";

const MySelectDrop = () => {
  const options = [
    { value: "jack", label: "Jack" },
    { value: "john", label: "John" },
    { value: "ann", label: "Ann" },
  ];

  const handleChange = (selectedOption) => {
    
  };

  const colorStyles = {
    control: (styles) => ({...styles}),
  }

  return (
    <>
      <Select options={options} onChange={handleChange} styles={colorStyles} />
    </>
  );
};

export default MySelectDrop;
