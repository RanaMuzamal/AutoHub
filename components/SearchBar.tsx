"use client";
import React, { useState } from "react";
import SearchManufacturer from "./SearchManufacturer";

function SearchBar() {
    const [manufacturer, setManufacturer] = useState("");
    const handleSearch = () => {};
    return (
        <form className="searchbar" onSubmit={handleSearch}>
            <div className="searchbar__item">
                <SearchManufacturer
                    setManufacture={setManufacturer}
                    manufacturer={manufacturer}
                />
            </div>
        </form>
    );
}

export default SearchBar;
