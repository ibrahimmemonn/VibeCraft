"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";

const Select = ({
  value,
  onValueChange,
  placeholder = "Select an option",
  options = [],
  disabled = false,
  className = "",
}) => {
  const [open, setOpen] = React.useState(false);
  const selectRef = React.useRef(null);

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Find the selected option's label
  const selectedOption = React.useMemo(() => {
    return options.find((option) => option.value === value);
  }, [options, value]);

  return (
    <div ref={selectRef} className={`relative ${className}`}>
      <button
        type="button"
        className={`flex items-center justify-between w-full px-3 py-2 text-sm border rounded-md bg-white
          ${
            disabled
              ? "cursor-not-allowed bg-gray-100 text-gray-400"
              : "cursor-pointer hover:border-gray-400"
          }
          ${open ? "border-gray-400" : "border-gray-300"}`}
        onClick={() => !disabled && setOpen(!open)}
        disabled={disabled}
      >
        <span className={!selectedOption ? "text-gray-400" : ""}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <ChevronDown
          className={`h-4 w-4 text-gray-500 transition-transform ${
            open ? "transform rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
          <ul className="py-1 max-h-60 overflow-auto">
            {options.map((option) => (
              <li
                key={option.value}
                className={`px-3 py-2 text-sm cursor-pointer hover:bg-gray-100
                  ${value === option.value ? "bg-gray-100 font-medium" : ""}`}
                onClick={() => {
                  onValueChange(option.value);
                  setOpen(false);
                }}
              >
                {option.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export { Select };
