import React from 'react';

interface SliderProps {
    label: string;
    value: number;
    setValue: (newValue: number) => void;
    min: number;
    max: number;
    step: number;
}

const Slider: React.FC<SliderProps> = ({ label, value, setValue, min, max, step }) => {
    return (
        <div>
            <label htmlFor={label}>{label}: {value}</label>
            <input
                type="range"
                id={label}
                min={min}
                max={max}
                step={step}
                value={value}
                onChange={(e) => setValue(parseInt(e.target.value))}
            />
        </div>
    );
};

export default Slider;