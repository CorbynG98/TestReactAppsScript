import { Route, Routes } from 'react-router';
// CORE PAGES =====================
import HomePage from '../pages/HomePage';
// UTILITY PAGES ===================
import TestPage1 from '../pages/main/TestPage1';
import TestPage2 from '../pages/main/TestPage2';
import NotFoundPage from '../pages/utility/NotFoundPage';

const RoutesComponent = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/Home' element={<HomePage />} />
            <Route path='/Test1' element={<TestPage1 />} />
            <Route path='/Test2' element={<TestPage2 />} />
            <Route path='*' element={<NotFoundPage />} />
        </Routes>
    );
};

export default RoutesComponent;