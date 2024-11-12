import React, { useState } from 'react';
import { Menu, X, Utensils } from 'lucide-react';

export const FoodHistory = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="flex">
            <div className="p-3 absolute top-0 right-0 z-30 lg:hidden">
                <button className={`focus:outline-none ${isOpen ? 'p-2 text-gray-500' : 'p-3 text-gray-50 bg-emerald-600 rounded-full'}`} onClick={toggleSidebar}>
                    {isOpen ? <X className="w-6 h-6" /> : <Utensils className="w-6 h-6" />}
                </button>
            </div>

            {isOpen && (
                <div className="fixed inset-0 bg-gray-950 bg-opacity-70 z-10 lg:hidden" onClick={toggleSidebar}></div>
            )}

            <div className={`fixed flex flex-col top-0 right-0 h-full bg-gray-50 border-l border-gray-200 transition-transform transform ${ isOpen ? 'translate-x-0' : 'translate-x-full'} w-80 z-20 lg:translate-x-0`}>
                <div className="p-6">
                    <h2 className="text-xl font-semibold mb-4 text-gray-600">Histórico</h2>
                    <div>
                        <p className="text-center text-gray-600 mt-2 p-3 rounded-lg border">Café da Tarde</p>
                    </div>
                    <div>
                        <p className="text-center text-gray-600 mt-2 p-3 rounded-lg border">Almoço</p>
                    </div>
                    <div>
                        <p className="text-center text-gray-600 mt-2 p-3 rounded-lg border">Café da manhã</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
