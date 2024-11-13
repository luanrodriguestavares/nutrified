import React from "react";
import { Sidebar } from "../components/sidebar";
import { Greeting } from "../components/greeting";
import { CardDashboard } from "../components/cardDashboard";
import { MealHistoryTable } from '../components/mealHistoryTable';
import { userData } from "../data/userData";
import { foodData } from "../data/foodData";
import { GlassWater, Apple, History, HeartPulse } from "lucide-react";

export function DashboardPage() {
    const user = userData;
    
    return (
        <div className="flex min-h-screen bg-gray-100">
            <Sidebar />

            <div className="flex-1 mt-8 p-6 transition-all duration-300 md:ml-64">
                <h1 className="text-2xl md:text-3xl text-gray-600 tracking-tighter font-bold">
                    <Greeting />, {user.name}! <HeartPulse className="inline ml-2 h-7 w-7"/>
                </h1>
                <p className="text-gray-500 text-sm md:text-base mb-2 leading-relaxed">
                    Essas são as estatísticas de sua alimentação diária.
                </p>
                
                <div className="mt-8 space-y-6">
                    <div className="container sm:mt-10">
                        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                            <CardDashboard
                                title="Calorias Consumidas"
                                value={1000}
                                goal={3000}
                                color="bg-emerald-500"
                                Icon={Apple}
                                type="food"
                            />

                            <CardDashboard
                                title="Água Consumida"
                                value={1500}      
                                goal={2000}       
                                color="bg-sky-500"
                                Icon={GlassWater}
                                type="water" 
                            />
                        </div>
                    </div>
                </div>

                <div className="mt-8 space-y-6">
                    <div className="container sm:mt-10">
                        <h1 className="text-xl md:text-xl text-gray-600 tracking-tighter font-bold">
                            Histórico de Refeições
                            <History className="inline ml-2"/>
                        </h1>
                        <p className="text-gray-500 text-sm md:text-base mb-6 leading-relaxed">
                            Aqui são exibidas suas ultimas 6 refeições.
                        </p>
                        <MealHistoryTable data={foodData} page="dashboard" />
                    </div>
                </div>
            </div>
        </div>
        
    );
}
