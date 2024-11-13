import React, { useState, useEffect, useRef } from "react";

export function InputField({ label, name, type, placeholder, Icon, options = [], value = "", onChange, readonly = false }) {
    const [filter, setFilter] = useState(value);
    const [isOpen, setIsOpen] = useState(false); 
    const inputRef = useRef(null); 
    const optionsRef = useRef(null); 

    // Atualiza o estado 'filter' com o valor inicial recebido
    useEffect(() => {
        setFilter(value);
    }, [value]);

    // Lida com a mudança de valor no campo de entrada
    const handleInputChange = (e) => {
        const newValue = e.target.value;
        setFilter(newValue === "" ? "" : newValue);  
        if (onChange) {
            onChange(e);
        }
    };

    // Filtra as opções com base no valor digitado em 'filter'
    const filteredOptions = filter
        ? options.filter((option) =>
            option.label.toLowerCase().includes(filter.toLowerCase())
        )
        : options;

    // Define o valor selecionado e fecha o menu de opções
    const handleSelect = (value) => {
        setFilter(value);
        setIsOpen(false); 
        if (onChange) {
            onChange({ target: { name, value } });
        }
    };

    // Fecha o menu de opções se o clique for fora do campo de entrada ou das opções
    const handleClickOutside = (e) => {
        if (
            inputRef.current && !inputRef.current.contains(e.target) &&
            optionsRef.current && !optionsRef.current.contains(e.target)
        ) {
            setIsOpen(false); 
        }
    };

    // Adiciona e remove o evento de clique para fechar o menu de opções
    useEffect(() => {
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return (
        <div className="">
            <label className="text-gray-800 text-sm font-medium px-3 mb-2 block">{label}</label>
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
                                handleInputChange(e);
                            }}
                            onClick={() => setIsOpen(true)} 
                            placeholder={placeholder}
                            readOnly={readonly} 
                            className={`w-full text-sm px-4 py-3 rounded-full outline-emerald-600 pr-10 ${
                                readonly ? "bg-gray-200 text-gray-600 border border-gray-200 cursor-not-allowed" : "text-gray-800 border border-gray-300"
                            }`}
                        />

                        {isOpen && !readonly && (
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
                        onChange={handleInputChange}
                        readOnly={readonly}
                        className={`w-full text-sm px-4 py-3 rounded-full outline-emerald-600 pr-10 remove-calendar-icon ${
                            readonly ? "bg-gray-200 text-gray-600 border border-gray-200 cursor-not-allowed" : "text-gray-800 border border-gray-300"
                        }`}
                        placeholder={placeholder}
                    />
                ) : (
                    <input
                        name={name}
                        type={type}
                        value={filter}
                        required
                        onChange={handleInputChange}
                        readOnly={readonly}
                        className={`w-full text-sm px-4 py-3 rounded-full outline-emerald-600 pr-10 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none ${
                            readonly ? "bg-gray-200 text-gray-600 border border-gray-200 cursor-not-allowed" : "text-gray-800 border border-gray-300"
                        }`}
                        placeholder={placeholder}
                    />
                )}
                {Icon && <Icon className="absolute right-4 text-gray-400" />}
            </div>
        </div>
    );
}
