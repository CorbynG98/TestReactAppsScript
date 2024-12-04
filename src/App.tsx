import { Renderer } from './pages/Renderer';
import ErrorBoundary from './pages/utility/ErrorBoundry';

export default function App() {
    return (
        <ErrorBoundary>
            <Renderer />
        </ErrorBoundary>
    );
}