import BarChart from "components/BarChart";
import DataTable from "components/DataTable";
import DonutChart from "components/DonutChart";
import Footer from "components/Footer/inidex";
import Navbar from "components/Navbar";

const Dashboard = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <h1 className="text-primary py-3">Dashboard de vendas</h1>

                <div className="row">
                    <div className="col-sm-6">
                        <h5 className="text-center text-secondary">Taxa de sucesso (%)</h5>
                        <BarChart />
                    </div>

                    <div className="col-sm-6">
                        <h5 className="text-center text-secondary">Taxa de vendas (%)</h5>
                        <DonutChart />
                    </div>
                </div>

                <div className="py-3">
                    <h2 className="text-primary">Todas vendas</h2>
                </div>

                <DataTable />
            </div>
            <Footer />
        </>
    );
}

export default Dashboard;