import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router';
import NavBar from '../components/NavBar';
import RoutesComponent from '../components/RoutesComponent';

export const Renderer = () => {
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
};