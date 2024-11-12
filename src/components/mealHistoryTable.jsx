import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function MealHistoryTable({ data, page }) {
    const isDashboard = page === 'dashboard';
    const [currentPage, setCurrentPage] = useState(0);

    const itemsPerPage = isDashboard ? 6 : 10;
    const paginatedData = isDashboard 
        ? data.slice(0, itemsPerPage)
        : data.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

    const handlePrevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 0));

    const handleNextPage = () => {
        const maxPage = Math.ceil(data.length / itemsPerPage) - 1;
        setCurrentPage((prev) => Math.min(prev + 1, maxPage));
    };

    return (
        <>
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
                        {paginatedData.map((item, index) => (
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
            {!isDashboard && (
                <div className="flex justify-between items-center py-3">
                    <button onClick={handlePrevPage} disabled={currentPage === 0} className="p-2 rounded-full bg-gray-50 hover:bg-gray-300 border border-gray-200 disabled:opacity-50">
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    <span className="text-sm">
                        Página {currentPage + 1} de {Math.ceil(data.length / itemsPerPage)}
                    </span>
                    <button onClick={handleNextPage} disabled={(currentPage + 1) * itemsPerPage >= data.length} className="p-2 rounded-full bg-gray-50 hover:bg-gray-300 border border-gray-200 disabled:opacity-50">
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>
            )}
        </>
    );
}
