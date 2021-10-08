import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { filterAction } from "../store/action-creators/filterProducts";
import { setSearch } from "../store/action-creators/setSearch";
import './SearchBar.css'

const SearchBar: React.FC = () => {
    const dispatch = useDispatch();
    const {searchValue} = useTypedSelector((state)=> state.search)

    useEffect(()=> {
        dispatch(filterAction())
    }, [searchValue])

    return(
        <div className="wrapper">
            <div className="search">
                <input type="text" onChange={(e)=> dispatch(setSearch(e.target.value))} className="searchTerm" placeholder="Find offers.."/>
                <div className="searchButton">
                    <img className="search-icon" src="https://static.thenounproject.com/png/424965-200.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default SearchBar;