"use client"

import type React from "react"
import { useState } from "react"

interface SelectorProps {
  options: string[]
  onChange: (selected: string) => void
  initialValue?: string
  label?: string
}

const Selector: React.FC<SelectorProps> = ({ options, onChange, initialValue, label }) => {
  const [selected, setSelected] = useState<string>(initialValue || options[0])

  const handleClick = (option: string) => {
    setSelected(option)
    onChange(option)
  }

  return (
    <div className="flex flex-col items-end space-y-2">
      {label && (
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-black rounded-full"></div>
          <span className="text-sm uppercase">
            {label}: {selected}
          </span>
        </div>
      )}
      <div className="flex flex-wrap gap-1 p-3 rounded-md">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => handleClick(option)}
            className={`
              px-4 py-2 
              text-sm font-medium 
              transition-colors
              cursor-pointer
              font-mono
              border-dashed
              border-2
              ${
                selected === option
                  ? "bg-black text-white"
                  : "bg-white text-black border border-gray-300 hover:bg-gray-100"
              }
            `}
            type="button"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Selector

