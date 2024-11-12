import React, { useState } from 'react';
import Modal from 'react-modal';
import { X } from 'lucide-react';

Modal.setAppElement('#root');

export function CardDashboard({ title, value, goal, color, Icon, type }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const percentage = (value / goal) * 100;
    const isOverGoal = value > goal;
    const unit = type === 'water' ? 'ml' : type === 'food' ? 'kcal' : '';

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <>
            <div onClick={openModal} className="w-full p-4 bg-gray-50 rounded-2xl border border-gray-200 cursor-pointer">
                <div className="flex flex-col">
                    <div className="flex flex-row items-center justify-between px-4 py-4">
                        <div className="flex mr-4">
                            <span className={`items-center px-4 py-4 m-auto rounded-full ${color} hover:bg-opacity-75`}>
                                {Icon && <Icon className="w-6 h-6 text-gray-50" />}
                            </span>
                        </div>
                        <div className="flex-1 pl-1">
                            <div className="text-xl font-medium text-gray-600">
                                {value} {unit} &gt; {goal} {unit} {isOverGoal && <span className="text-red-500">⚠️</span>}
                            </div>
                            <div className="text-xs text-gray-400 sm:text-sm">
                                {title}
                            </div>
                        </div>
                    </div>
                    <div className="px-4 pt-2">
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div className={`h-2.5 rounded-full ${color}`} style={{ width: `${Math.min(percentage, 100)}%` }}></div>
                        </div>
                        <div className="flex flex-row items-center justify-between w-full pt-2 text-sm text-gray-400">
                            <span>0 {unit}</span>
                            <span>{goal} {unit}</span>
                            {isOverGoal && <span className="text-red-500">{value} {unit}</span>}
                        </div>
                    </div>
                </div>
            </div>

            <Modal isOpen={isModalOpen} onRequestClose={closeModal} contentLabel="Detalhes do Card" className="relative w-11/12 max-w-lg p-6 mx-auto mt-20 bg-white rounded-2xl shadow-lg focus:outline-none md:max-w-lg lg:max-w-xl xl:max-w-2xl min-h-[50vh] aspect-square" overlayClassName="fixed inset-0 bg-gray-950 bg-opacity-70 z-30 px-4">
                <button onClick={closeModal} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none z-40">
                    <X className="w-6 h-6" />
                </button>

                <h2 className="text-xl font-bold mb-4 text-gray-700">{title}</h2>
                <p className="text-gray-600">Quantidade consumida atual: {value} {unit}</p>
                <p className="text-gray-600">Meta: {goal} {unit}</p>
                <p className="text-gray-600">Percentual Atual: {percentage.toFixed(2)}%</p>
                {isOverGoal && <p className="text-red-500 mt-2">Você ultrapassou a meta!</p>}
            </Modal>
        </>
    );
}
