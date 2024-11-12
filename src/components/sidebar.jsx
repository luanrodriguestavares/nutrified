import React, { useState, useEffect } from 'react';
import logoEmerald from '../assets/img/logo-emerald.svg';
import { Home, Menu, Citrus, X, Dumbbell, Banana, LogOut } from 'lucide-react';

export const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'; // Desativa o scroll
        } else {
            document.body.style.overflow = ''; // Restaura o scroll
        }

        return () => {
            document.body.style.overflow = ''; // Garante que o scroll seja restaurado ao desmontar
        };
    }, [isOpen]);

    const handleCloseSidebar = () => {
        setIsOpen(false);
    };

    const handleLogout = () => {
        console.log("Logout acionado");
    };

    return (
        <div className="flex relative">
            <div className="p-3 absolute top-0 left-0 md:hidden z-20">
                <button className="p-2 text-gray-500 focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? (
                        <X className="w-6 h-6" />
                    ) : (
                        <Menu className="w-6 h-6" />
                    )}
                </button>
            </div>

            {isOpen && (
                <div className="fixed inset-0 bg-gray-950 bg-opacity-70 z-10 md:hidden" onClick={handleCloseSidebar}></div>
            )}

            <div className={`fixed flex flex-col top-0 left-0 h-full bg-gray-50 border-r border-gray-200 transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} w-64 z-20 md:translate-x-0 md:w-64`}>
                <div className="flex items-center justify-center border-b border-gray-200 h-28">
                    <div>
                        <img src={logoEmerald} className="w-20 h-auto" alt="Logo" />
                    </div>
                </div>
                
                <div className="overflow-y-auto overflow-x-hidden flex-grow">
                    <ul className="flex flex-col py-4 space-y-1">
                        <li className="px-5">
                            <div className="flex flex-row items-center h-8">
                                <div className="text-sm font-medium tracking-wide text-gray-700">Menu</div>
                            </div>
                        </li>
                        <li>
                            <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-100 text-gray-700 border-l-4 border-transparent hover:border-emerald-600 pr-6">
                                <span className="inline-flex justify-center items-center ml-4">
                                    <Home className="w-5 h-5" />
                                </span>
                                <span className="ml-2 text-sm truncate">Dashboard</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-100 text-gray-700 border-l-4 border-transparent hover:border-emerald-600 pr-6">
                                <span className="inline-flex justify-center items-center ml-4">
                                    <Citrus className="w-5 h-5" />
                                </span>
                                <span className="ml-2 text-sm truncate">Adicionar Refeição</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-100 text-gray-700 border-l-4 border-transparent hover:border-emerald-600 pr-6">
                                <span className="inline-flex justify-center items-center ml-4">
                                    <Banana className="w-5 h-5" />
                                </span>
                                <span className="ml-2 text-sm truncate">Suas Refeições</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-100 text-gray-700 border-l-4 border-transparent hover:border-emerald-600 pr-6">
                                <span className="inline-flex justify-center items-center ml-4">
                                    <Dumbbell className="w-5 h-5" />
                                </span>
                                <span className="ml-2 text-sm truncate">Seus objetivos</span>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="border-t border-gray-200 p-4 fixed bottom-0 w-64 bg-gray-50">
                    <button onClick={handleLogout} className="flex items-center w-full px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
                        <LogOut className="w-5 h-5 mr-2" />
                        <span className="text-sm">Sair</span>
                    </button>
                </div>
            </div>
        </div>
    );
};
