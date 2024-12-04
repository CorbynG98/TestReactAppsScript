import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './HomePage';

export const Renderer = () => {
    return (
        <HomePage />
        // <Router>
        //     <div
        //         className='maxHeight'
        //         style={{
        //             backgroundColor: 'black',
        //             background: 'radial-gradient(#262626, #000)',
        //         }}>
        //         <NavBar />
        //         <RoutesComponent />
        //     </div>
        // </Router>
    );
};