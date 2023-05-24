import React from 'react';
import CategoryDropdown from "./CategoryDropdown/CategoryDropdown";
import BrandDropdown from "./BrandDropdown/BrandDropdown";
import GenderDropdown from "./GenderDropdown/GenderDropdown";
import ColorDropdown from "./ColorDropdown/ColorDropdown";
import PriceDropdown from "./PriceDropdown/PriceDropdown";
import FastShip from "./FastShip/FastShip";
import Sale from "./Sale/Sale";

const FilterDropdowns = () => {
    return (
        <div>
            <CategoryDropdown/>
            <BrandDropdown/>
            <GenderDropdown/>
            <ColorDropdown/>
            <PriceDropdown/>
            <FastShip/>
            <Sale/>
        </div>
    );
};

export default FilterDropdowns;