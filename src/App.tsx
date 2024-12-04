import { BrowserRouter } from "react-router";
import NavBar from "./components/NavBar";
import RoutesComponent from "./components/RoutesComponent";

export default function App() {
    return (
        <BrowserRouter>
            <div
                className='maxHeight'
                style={{
                    backgroundColor: 'black',
                    background: 'radial-gradient(#262626, #000)',
                }}>
                <NavBar />
                <RoutesComponent />
            </div>
        </BrowserRouter>
    );
}