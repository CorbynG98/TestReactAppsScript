import HomePage from "./pages/HomePage";

export default function App() {
    return (
        <div
            className='maxHeight'
            style={{
                backgroundColor: 'black',
                background: 'radial-gradient(#262626, #000)',
            }}>
            <HomePage />
        </div>
        // <BrowserRouter>
        //     <div
        //         className='maxHeight'
        //         style={{
        //             backgroundColor: 'black',
        //             background: 'radial-gradient(#262626, #000)',
        //         }}>
        //         <NavBar />
        //         <RoutesComponent />
        //     </div>
        // </BrowserRouter>
    );
}