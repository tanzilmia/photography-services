
import { RouterProvider } from 'react-router-dom';
import router from '../src/Routing/Routing'
import './App.css';
function App() {
  return (
    <div>
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  );
}

export default App;
