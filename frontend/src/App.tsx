import DataTable from "components/DataTable";
import Footer from "components/Footer/inidex";
import Navbar from "components/Navbar";

const App = () => {
  return (
    <>
    <Navbar />
    <div className="container">
      <h1 className="text-primary">Olá, mundo!</h1>
      <DataTable />
    </div>
    <Footer />
    </>
  );
}

export default App;
