import React from 'react';

interface SliderProps {
    label: string;
    value: number;
    setValue: (newValue: number) => void;
    min: number;
    max: number;
    step: number;
    onSelectAct?: () => void;
}

const Slider: React.FC<SliderProps> = ({ label, value, setValue, min, max, step, onSelectAct}) => {
    return (
        <div className="flex flex-col items-center w-full">
            <label htmlFor={label} className="text-sm text-gray-700 font-mono">{label}: {value}</label>
            <div className="relative w-full h-2 bg-gray-200 rounded-sm">
                <div
                    className="absolute h-full bg-black rounded-sm"
                    style={{ width: `${((value - min) / (max - min)) * 100}%` }}
                ></div>
                <input
                    type="range"
                    id={label}
                    min={min}
                    max={max}
                    step={step}
                    value={value}
                    onChange={(e) => {
                        setValue(parseInt(e.target.value));
                        onSelectAct;
                        }
                    }
                    className="absolute w-full h-full opacity-0 cursor-pointer"
                    style={{ top: '-5px' }}
                />
            </div>
        </div>
    );
};

export default Slider;
