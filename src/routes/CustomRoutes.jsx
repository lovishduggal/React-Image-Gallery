import { Route, Routes } from 'react-router-dom';
import Gallery from '../components/Gallery/Gallery';
import ImageDetails from '../components/ImageDetails/ImageDetails';

function CustomRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Gallery />}></Route>
            <Route
                path="/v1/sample-data/photos/:id"
                element={<ImageDetails />}></Route>
        </Routes>
    );
}
export default CustomRoutes;
