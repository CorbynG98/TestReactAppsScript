import { useSearchParams } from 'react-router-dom';
// CORE PAGES =====================
import HomePage from '../pages/HomePage';
// UTILITY PAGES ===================
import TestPage1 from '../pages/main/TestPage1';
import TestPage2 from '../pages/main/TestPage2';
import NotFoundPage from '../pages/utility/NotFoundPage';

const RoutesComponent = () => {
    const [searchParams] = useSearchParams();
    const page = searchParams.get('page') || 'Home';

    // Define a map for query params to components
    const pageMap = {
        Home: <HomePage />,
        Test1: <TestPage1 />,
        Test2: <TestPage2 />,
    };

    return (
        <div>
            {pageMap[page] || <NotFoundPage />} {/* Render based on the query param or fallback to NotFoundPage */}
        </div>
    );
};

export default RoutesComponent;