import React, { useContext } from "react";
import { varContext } from "./App";
const Individual = () => {
  const val = useContext(varContext);

  return <>{val}</>;
};
export default Individual;
