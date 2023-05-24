import React from 'react';
import s from './FiltersBlock.module.css'

const FiltersBlock = () => {
    return (
        <div className={s.container}>
            <div className={s.border + ' fw-bold'}>Фильтры</div>
            <div className={s.border}>Big</div>
            <div className={s.border}>Small</div>
            <div className={s.border}>Денис пес ебанный</div>
        </div>
    );
};

export default FiltersBlock;