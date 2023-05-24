import React, {useState} from 'react';
import s from './GenderDropdown.module.css'
import { CustomCheckbox } from '@/shared/ui';

const GenderDropdown = () => {
    const gender = [
        'Мужской',
        'Женский',
    ]
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div>
            <div className={s.dropdown}
                 style={isOpen ? {borderRadius: '7px 7px 0 0'} : {borderRadius: '7px'}}
            >
                <div
                    onClick={() => toggleDropdown()}
                    className={s.dropdown_toggle}
                >
                    <div className={s.dropdown_toggle_text}>
                        Пол
                    </div>
                </div>
            </div>
            {isOpen && (
                <div>
                    <div className={s.dropdown_items_block}>
                        {
                            gender.map(item =>
                                <div
                                    key={item}
                                    className={s.dropdown_item}
                                >
                                    <div className={s.dropdown_text} onClick={(e) => e.stopPropagation()}>
                                        <CustomCheckbox
                                            labelText={item}
                                        />
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            )}
        </div>
    )
};

export default GenderDropdown;