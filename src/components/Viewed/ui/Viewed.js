import React from 'react';
import s from './Viewed.module.css'
import ScrollableBlock from "../../UI/ScrollableBlock/ScrollableBlock";
import ProductCard from "../ProductCard/ProductCard";

const Viewed = () => {
    return (
        <div>
            <p className={s.title}>Ранее просмотренные</p>
            <ScrollableBlock>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </ScrollableBlock>
            <hr/>
        </div>
    );
};

export default Viewed;