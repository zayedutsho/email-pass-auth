import { Outlet } from "react-router-dom";
import Header from "../Header";

const OutLet = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default OutLet;
