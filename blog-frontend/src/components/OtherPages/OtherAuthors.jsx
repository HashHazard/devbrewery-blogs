import React, { createContext, useContext } from "react";

export const MyContext = createContext();

export const CompA = () => {
  return <div>{<CompB />}</div>;
};
export const CompB = () => {
  const data = useContext(MyContext);
  return <div>{data}</div>;
};

const OtherAuthors = () => {
  return (
    <div style={{ padding: "100px" }}>
      OtherAuthors
      <MyContext.Provider value={10}> {<CompA />}</MyContext.Provider>
    </div>
  );
};

export default OtherAuthors;
