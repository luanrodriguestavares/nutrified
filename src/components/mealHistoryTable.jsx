import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function MealHistoryTable({ data, page }) {
    const isDashboard = page === 'dashboard';
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = isDashboard ? 6 : 10;


    // Ordena os dados do mais recente ao mais antigo
    const sortedData = [...data].sort((a, b) => new Date(b.time) - new Date(a.time));


    // Paginação dos dados com base no número de itens por página
    const paginatedData = isDashboard 
        ? sortedData.slice(0, itemsPerPage)
        : sortedData.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);


    // Função para avançar para a próxima página
    const handleNextPage = () => {
        const maxPage = Math.ceil(sortedData.length / itemsPerPage) - 1;
        setCurrentPage((prev) => Math.min(prev + 1, maxPage));
    };


    // Função para voltar para a página anterior
    const handlePrevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 0));

    
    // Função para formatar a data e hora em formato legível
    const formatDateTime = (dateTime) => {
        const date = new Date(dateTime);
        return new Intl.DateTimeFormat('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        }).format(date);
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
                                <td className="px-5 py-4">{formatDateTime(item.time)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {!isDashboard && (
                <div className="flex justify-between items-center py-3">
                    <button onClick={handlePrevPage} disabled={currentPage === 0} className="p-2 rounded-full bg-gray-50 hover:bg-gray-300 border border-gray-200 disabled:opacity-0">
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    <span className="text-sm">
                        Página {currentPage + 1} de {Math.ceil(sortedData.length / itemsPerPage)}
                    </span>
                    <button onClick={handleNextPage} disabled={(currentPage + 1) * itemsPerPage >= sortedData.length} className="p-2 rounded-full bg-gray-50 hover:bg-gray-300 border border-gray-200 disabled:opacity-0">
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>
            )}
        </>
    );
}
