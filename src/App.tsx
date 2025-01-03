import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import RoutesComponent from "./components/RoutesComponent";

export default function App() {
    return (
        <div className='maxHeight'
            style={{
                backgroundColor: 'black',
                background: 'radial-gradient(#262626, #000)',
            }}>
            <BrowserRouter>
                <NavBar />
                <RoutesComponent />
            </BrowserRouter>
        </div>
    );
}