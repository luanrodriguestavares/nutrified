import React from "react";
import { Sidebar } from "../components/sidebar";
import { MealHistoryTable } from '../components/mealHistoryTable';
import { Coffee } from "lucide-react";

const foodData = [
    { food: "Maçã", calories: 52, time: "08:00" },
    { food: "Banana", calories: 89, time: "10:30" },
    { food: "Sanduíche", calories: 250, time: "12:45" },
    { food: "Iogurte", calories: 150, time: "15:00" },
    { food: "Salada", calories: 100, time: "18:30" },
    { food: "Sopa", calories: 120, time: "20:00" },
    { food: "Maçã", calories: 52, time: "08:00" },
    { food: "Banana", calories: 89, time: "10:30" },
    { food: "Sanduíche", calories: 250, time: "12:45" },
    { food: "Iogurte", calories: 150, time: "15:00" },
    { food: "Salada", calories: 100, time: "18:30" },
    { food: "Sopa", calories: 120, time: "20:00" },
    { food: "Maçã", calories: 52, time: "08:00" },
    { food: "Banana", calories: 89, time: "10:30" },
    { food: "Sanduíche", calories: 250, time: "12:45" },
    { food: "Iogurte", calories: 150, time: "15:00" },
    { food: "Salada", calories: 100, time: "18:30" },
    { food: "Sopa", calories: 120, time: "20:00" },
    { food: "Maçã", calories: 52, time: "08:00" },
    { food: "Banana", calories: 89, time: "10:30" },
    { food: "Sanduíche", calories: 250, time: "12:45" },
    { food: "Iogurte", calories: 150, time: "15:00" },
    { food: "Salada", calories: 100, time: "18:30" },
    { food: "Sopa", calories: 120, time: "20:00" },
    { food: "Maçã", calories: 52, time: "08:00" },
    { food: "Banana", calories: 89, time: "10:30" },
    { food: "Sanduíche", calories: 250, time: "12:45" },
    { food: "Iogurte", calories: 150, time: "15:00" },
    { food: "Salada", calories: 100, time: "18:30" },
    { food: "Sopa", calories: 120, time: "20:00" },
    { food: "Maçã", calories: 52, time: "08:00" },
    { food: "Banana", calories: 89, time: "10:30" },
    { food: "Sanduíche", calories: 250, time: "12:45" },
    { food: "Iogurte", calories: 150, time: "15:00" },
    { food: "Salada", calories: 100, time: "18:30" },
    { food: "Sopa", calories: 120, time: "20:00" },
    { food: "Maçã", calories: 52, time: "08:00" },
    { food: "Banana", calories: 89, time: "10:30" },
    { food: "Sanduíche", calories: 250, time: "12:45" },
    { food: "Iogurte", calories: 150, time: "15:00" },
    { food: "Salada", calories: 100, time: "18:30" },
    { food: "Sopa", calories: 120, time: "20:00" },
];
export function MealHistoryPage() {
    return (
        <div className="flex min-h-screen bg-gray-100">
            <Sidebar />

            <div className="flex-1 mt-8 p-6 transition-all duration-300 md:ml-64">
                <h1 className="text-2xl md:text-3xl text-gray-600 tracking-tighter font-bold">
                    Suas Refeições <Coffee className="inline ml-2 h-7 w-7"/>
                </h1>
                <p className="text-gray-500 text-sm md:text-base mb-2 leading-relaxed">
                    Aqui serão exibidas todos os registros de suas refeições.
                </p>

                <div className="mt-8 space-y-6">
                    <MealHistoryTable data={foodData} page="mealhistorypage" />
                </div>


            </div>
        </div>
        
    );
}
