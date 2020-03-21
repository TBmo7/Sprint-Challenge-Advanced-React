import React, {useEffect, setState} from "react";
import useDarkMode from "../Hooks/useDarkMode";

function NavBar(){

    const [darkMode, setDarkMode] = useDarkMode();
    const newDark = e =>{
        e.preventDefault();
        setDarkMode(!darkMode);
    }


    return(

        <div className = "navBar">

            <button onClick = {newDark}>A Button</button>
            <button>B Button</button>
            <button>C Button</button>


        </div>

    )

}
export default NavBar;