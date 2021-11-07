import axios from 'axios';
import Pagination from 'components/Pagination';
import { useEffect, useState } from 'react';
import { SalePage } from 'types/sale';
import { formatLocalDate } from 'utils/format';
import { BASE_URL } from 'utils/requests';

const DataTable = () => {
    const [page, setPage] = useState<SalePage>({
        first: true,
        last: false,
        number: 0,
        totalElements: 0,
        totalPages: 0
    });

    const [activePage, setActivePage] = useState(0);

    useEffect(() => {
        axios.get(`${BASE_URL}/sales?page=${activePage}&size=20&sort=date,desc`).then(r => {
            setPage(r.data);
        });
    }, [activePage]);

    const changePage = (i: number) => {
        setActivePage(i);
    }

    return (
        <>
            <Pagination page = { page } onPageChange = { changePage } />
            <div className="table-responsive">
                <table className="table table-striped table-hover table-sm">
                    <thead>
                        <tr>
                            <th className="text-center">Data</th>
                            <th className="text-center">Vendedor</th>
                            <th className="text-center">Clientes visitados</th>
                            <th className="text-center">Negócios fechados</th>
                            <th className="text-center">Valor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            page.content?.map(item => (
                                <tr key={item.id}>
                                    <td className="text-center">{formatLocalDate(item.date, 'dd/MM/yyyy')}</td>
                                    <td className="text-center">{item.seller.name}</td>
                                    <td className="text-center">{item.visited}</td>
                                    <td className="text-center">{item.deals}</td>
                                    <td className="text-center">{item.amount.toFixed(2)}</td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>
        </>
    );
}

export default DataTable;