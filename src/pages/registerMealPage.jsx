import React, { useState } from "react";
import { Search, Salad, Fish, Ham, CalendarClock } from 'lucide-react';
import { Sidebar } from "../components/sidebar";
import { InputField } from "../components/inputField";

const options = [
    { value: "1", label: "Opção 1" },
    { value: "2", label: "Opção 2" },
    { value: "3", label: "Opção 3" },
    { value: "4", label: "Opção 4" },
    { value: "5", label: "Opção 5" },
];

export function RegisterMealPage() {
    const [selectedFood, setSelectedFood] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [calories, setCalories] = useState(0);
    const [mealHistory, setMealHistory] = useState([]);
    const [totalCalories, setTotalCalories] = useState(0);

    const handleFoodChange = (e) => {
        setSelectedFood(e.target.value);
    };

    const handleQuantityChange = (e) => {
        setQuantity(e.target.value);
    };

    const handleCaloriesChange = (e) => {
        setCalories(e.target.value);
    };

    const handleAddMeal = () => {
        const foodItem = options.find((item) => item.label === selectedFood);
        if (foodItem) {
            const totalCaloriesForMeal = calories * quantity;
            setMealHistory([
                ...mealHistory,
                { food: selectedFood, calories: totalCaloriesForMeal, time: new Date().toLocaleTimeString() },
            ]);
            setTotalCalories(totalCalories + totalCaloriesForMeal);
        }
    };

    return (
        <div className="flex min-h-screen bg-gray-100">
            <Sidebar />

            <div className="flex-1 mt-8 p-6 transition-all duration-300 md:ml-64">
                <h1 className="text-2xl md:text-3xl text-gray-600 tracking-tighter font-bold">
                    Adicionar Refeição
                </h1>
                <p className="text-gray-500 text-sm md:text-base mb-2 leading-relaxed">
                    Registre as refeições que você está consumindo durante o dia.
                </p>

                <div className="mt-8 space-y-6">
                    <div className="container sm:mt-10">
                        <div className="mb-6">
                            <InputField
                                label="Selecione o Alimento"
                                name="opcao"
                                type="select"
                                placeholder="Digite para filtrar..."
                                options={options}
                                Icon={Search}
                            />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <InputField
                                label="Quantidade"
                                name="quantidade"
                                type="number"
                                placeholder="Quantidade"
                                value={quantity}
                                onChange={handleQuantityChange}
                                Icon={Salad}
                            />
                            <InputField
                                label="Calorias por Porção"
                                name="calorias"
                                type="number"
                                placeholder="Calorias por porção"
                                value={calories}
                                onChange={handleCaloriesChange}
                                Icon={Fish}
                            />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <InputField
                                label="Calorias Totais da Refeição"
                                name="calorias"
                                type="number"
                                placeholder="Calorias Totais"
                                value={calories}
                                onChange={handleCaloriesChange}
                                Icon={Ham}
                            />
                            <InputField
                                label="Data e Hora:"
                                name="datetime"
                                type="number"
                                placeholder="dd/mm/aaaa hh:mm:ss"
                                value={calories}
                                onChange={handleCaloriesChange}
                                Icon={CalendarClock}
                            />
                        </div>

                        <button onClick={handleAddMeal} className="w-full shadow-xl py-3 px-4 text-sm font-semibold rounded-full text-white bg-emerald-500 hover:bg-emerald-600 focus:outline-none transition-all">
                            Adicionar Refeição
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
