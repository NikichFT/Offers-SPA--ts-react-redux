import React from "react";
import SearchBar from "./SearchBar";
import TableProducts from "./TableProducts";
import './MainView.css'

const MainView: React.FC = () => {
    return(
        <div className="main">
            <h1>Financial Offers</h1>
            <SearchBar/>
            <TableProducts/>
        </div>
    )
}

export default MainView;