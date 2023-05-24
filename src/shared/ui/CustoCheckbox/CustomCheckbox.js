import React, {useState} from 'react';
import s from './CustomCheckbox.module.css'

const CustomCheckbox = ({reversed = false, labelText, labelClass = '', imgSrc = '', color = ''}) => {
    const [isChecked, setIsChecked] = useState(false)
    return (
        <div
            className={s.block}
            style={reversed ? {flexDirection: 'row-reverse'} : {flexDirection: "row"}}
        >
            <div
                className={s.checkbox}
                onClick={() => setIsChecked(!isChecked)}

            >
                {isChecked &&
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                         className="bi bi-check-lg" viewBox="0 0 16 16">
                        <path
                            d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                    </svg>
                }
            </div>
            <div
                onClick={() => setIsChecked(!isChecked)}
                className={`${s.label} ${labelClass}`}
            >
                {
                    color && <span className={s.color} style={{background: `${color}`}}/>
                }
                {labelText}
                {
                    imgSrc && <img src={imgSrc} alt="" style={{margin: '0 5px'}}/>
                }
            </div>
        </div>
    );
};

export default CustomCheckbox;