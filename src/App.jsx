import './App.css';
import {MyRoutes} from './routes/Routes.jsx';

function App() {
  return (
    <>
        <header>
            <h2 className='title'>📺</h2>
            <h2 className='title'>Películas Chigüiro</h2>
        </header>
        <MyRoutes />
    </>
  );
}

export default App;