import 'bootstrap/dist/css/bootstrap.min.css';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router } from 'react-router';
import NavBar from '../components/NavBar';
import RoutesComponent from '../components/RoutesComponent';

export const Renderer = () => {
    return (
        <HelmetProvider>
            <Helmet
                titleTemplate='Apps Script Test | %s'
                defaultTitle='Apps Script Test | Home'
            />
            <Router>
                <div
                    className='maxHeight'
                    style={{
                        backgroundColor: 'black',
                        background: 'radial-gradient(#262626, #000)',
                    }}>
                    <NavBar />
                    <RoutesComponent />
                </div>
            </Router>
        </HelmetProvider>
    );
};