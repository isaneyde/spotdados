

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UsersList } from "./pages/list-users";
import { Login } from "./pages/login";
const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/users" element={<UsersList />} />
      <Route path="*" element={<Login />} />
    </Routes>
  </BrowserRouter>

);

export default App;