// import { useState } from "react";
// import { Toggle } from "../Darkmode/Toggle";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";


const Root = () => {
    // const [isDark, setIsDark] = useState(false);
    return (
        <div>
            {/* <div className="App" data-theme={isDark ? "dark" : "light"}>
      <Toggle isChecked={isDark} handleChange={() => setIsDark(!isDark)} />
      </div> */}
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;