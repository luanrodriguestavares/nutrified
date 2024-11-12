import React from 'react';

export function FoodHistoryTable({ data }) {
    return (
        <div className="relative overflow-x-auto rounded-2xl border border-gray-200 max-w-full">
            <table className="w-full text-sm text-left rtl:text-right">
                <thead className="text-sm text-gray-50 bg-emerald-600">
                    <tr>
                        <th scope="col" className="px-5 py-3">Alimento</th>
                        <th scope="col" className="px-5 py-3">Calorias</th>
                        <th scope="col" className="px-5 py-3">Horário</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index} className="bg-gray-50 border-b text-xs hover:bg-emerald-200/10">
                            <th scope="row" className="px-5 py-4 font-medium text-gray-700 whitespace-nowrap">
                                {item.food}
                            </th>
                            <td className="px-5 py-4">{item.calories} kcal</td>
                            <td className="px-5 py-4">{item.time}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
