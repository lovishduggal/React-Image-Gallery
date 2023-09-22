import './App.css';
import Gallery from './components/Gallery/Gallery';
import CustomRoutes from './routes/CustomRoutes';

function App() {
    return (
        <div className="main-wrapper">
            <h1 className="main-heading">
                <i>React Image Gallery</i>
            </h1>
            <CustomRoutes />
        </div>
    );
}

export default App;
