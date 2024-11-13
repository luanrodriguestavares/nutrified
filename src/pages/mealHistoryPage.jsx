import React from "react";
import { Sidebar } from "../components/sidebar";
import { MealHistoryTable } from '../components/mealHistoryTable';
import { Coffee } from "lucide-react";

const foodData = [
    { food: "Banana", calories: 90, time: "2024-11-13T08:30:00" },
    { food: "Sanduíche", calories: 250, time: "2024-11-13T09:00:00" },
    { food: "Suco de Laranja", calories: 80, time: "2024-11-13T09:30:00" },
    { food: "Suco de Manga", calories: 80, time: "2024-11-13T10:00:00" },
    { food: "Suco de Uva", calories: 80, time: "2024-11-13T10:30:00" },
    { food: "Arroz, Bife e Salada", calories: 80, time: "2024-11-13T11:00:00" },
    { food: "Feijão Tropeiro", calories: 150, time: "2024-11-13T11:30:00" },
    { food: "Pizza", calories: 300, time: "2024-11-13T12:00:00" },
    { food: "Hambúrguer", calories: 350, time: "2024-11-13T12:30:00" },
    { food: "Cachorro Quente", calories: 200, time: "2024-11-13T13:00:00" },
    { food: "Macarrão", calories: 220, time: "2024-11-13T13:30:00" },
    { food: "Salada", calories: 50, time: "2024-11-13T14:00:00" },
    { food: "Pão de Queijo", calories: 100, time: "2024-11-13T14:30:00" },
    { food: "Biscoito", calories: 120, time: "2024-11-13T15:00:00" },
    { food: "Coxinha", calories: 150, time: "2024-11-13T15:30:00" },
    { food: "Torta de Frango", calories: 250, time: "2024-11-13T16:00:00" },
    { food: "Iogurte", calories: 80, time: "2024-11-13T16:30:00" },
    { food: "Fruta", calories: 50, time: "2024-11-13T17:00:00" },
    { food: "Açaí", calories: 200, time: "2024-11-13T17:30:00" },
    { food: "Macarrão com Carne Moída", calories: 400, time: "2024-11-13T18:00:00" },
    { food: "Arroz de Frango", calories: 300, time: "2024-11-13T18:30:00" },
    { food: "Sopa", calories: 120, time: "2024-11-13T19:00:00" },
    { food: "Feijoada", calories: 400, time: "2024-11-13T19:30:00" },
    { food: "Risoto", calories: 350, time: "2024-11-13T20:00:00" },
    { food: "Strogonoff de Frango", calories: 500, time: "2024-11-13T20:30:00" },
    { food: "Churrasco", calories: 600, time: "2024-11-13T21:00:00" },
    { food: "Creme de Milho", calories: 200, time: "2024-11-13T21:30:00" },
    { food: "Salgado Frito", calories: 250, time: "2024-11-13T22:00:00" },
    { food: "Suco Detox", calories: 50, time: "2024-11-13T22:30:00" },
    { food: "Bolo de Chocolate", calories: 300, time: "2024-11-13T23:00:00" },
    { food: "Pudim", calories: 150, time: "2024-11-13T23:30:00" },
    { food: "Chá", calories: 0, time: "2024-11-14T00:00:00" },
    { food: "Sanduíche de Atum", calories: 180, time: "2024-11-14T06:30:00" },
    { food: "Suco Verde", calories: 90, time: "2024-11-14T07:00:00" }
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
