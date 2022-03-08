import { Form } from "./components/Form";
import { DescriptionPage } from "./components/DescritpionPage";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useParams } from "react-router-dom";

type RoomParams = {
  id: string;
};

function App() {
  const idURL = Math.random();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form idURL={idURL} />} />
        <Route path="/description/:idURL" element={<DescriptionPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
