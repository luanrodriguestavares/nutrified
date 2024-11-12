import React, { useState, useEffect, useRef } from "react";

export function InputField({ label, name, type, placeholder, Icon, options = [] }) {
    const [filter, setFilter] = useState("");
    const [isOpen, setIsOpen] = useState(false); 
    const inputRef = useRef(null); 
    const optionsRef = useRef(null); 

    const filteredOptions = filter
        ? options.filter((option) =>
              option.label.toLowerCase().includes(filter.toLowerCase())
          )
        : options; 

    const handleSelect = (value) => {
        setFilter(value);
        setIsOpen(false); 
    };

    const handleClickOutside = (e) => {
        if (
            inputRef.current && !inputRef.current.contains(e.target) &&
            optionsRef.current && !optionsRef.current.contains(e.target)
        ) {
            setIsOpen(false); 
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return (
        <div className="">
            <label className="text-gray-800 text-sm mb-2 block">{label}</label>
            <div className="relative flex items-center">
                {type === "select" ? (
                    <>
                        <input
                            ref={inputRef}
                            type="text"
                            value={filter}
                            onChange={(e) => {
                                setFilter(e.target.value);
                                setIsOpen(true);
                            }}
                            onClick={() => setIsOpen(true)} 
                            placeholder={placeholder}
                            className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-full outline-emerald-600 pr-10"
                        />

                        {isOpen && (
                            <ul ref={optionsRef} className="absolute w-full bg-white border border-gray-300 rounded-lg mt-1 max-h-60 overflow-y-auto z-10 top-full">
                                {filteredOptions.length > 0 ? (
                                    filteredOptions.map((option, index) => (
                                        <li
                                            key={index}
                                            onClick={() => handleSelect(option.label)}
                                            className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                                        >
                                            {option.label}
                                        </li>
                                    ))
                                ) : (
                                    <li className="px-4 py-2 text-gray-500">Nenhuma opção encontrada</li>
                                )}
                            </ul>
                        )}
                    </>
                ) : type === "datetime" ? (
                    <input
                        name={name}
                        type="datetime-local"
                        required
                        className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-full outline-emerald-600 pr-10 remove-calendar-icon"
                        placeholder={placeholder}
                    />
                ) : (
                    <input
                        name={name}
                        type={type}
                        required
                        className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-full outline-emerald-600 pr-10 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                        placeholder={placeholder}
                    />
                )}
                {Icon && <Icon className="absolute right-4 text-gray-400" />}
            </div>
        </div>
    );
}
