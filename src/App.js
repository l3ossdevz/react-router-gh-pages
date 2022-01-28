import "./App.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Routing from "./routes/Routing";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Routing />
            <Footer />
        </div>
    );
}

export default App;
