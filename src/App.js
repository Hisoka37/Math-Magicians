import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from 'react-router-dom';
import './App.css';
import Calculator from './componenets/Calculator';
import Quote from './componenets/Quote';
import Home from './componenets/Home';
// layouts
import RootLayout from './Layout/RootLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="Calculator" element={<Calculator />} />
      <Route path="Quote" element={<Quote />} />
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
