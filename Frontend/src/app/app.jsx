import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "./routes";
import WhatsAppWidget from "../components/WhatsAppWidget";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={route.element}
          />
          
        ))}
        
      </Routes>
      <WhatsAppWidget/>
    </BrowserRouter>
  );
}

export default App;