import { BrowserRouter, Routes, Route} from "react-router-dom"
import EmployeeList from "./components/EmployeeList"
import AddEmployee from "./components/AddEmployee"
import EditEmployee from "./components/EditEmployee"
import ViewEmployee from "./components/ViewEmployee"
import DeleteEmployee from "./components/DeleteEmployee"
import Login from "./components/Login"
import Register from "./components/Register"

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<EmployeeList />} />
          <Route path="/add" element={<AddEmployee />} />
          <Route path="/edit/:id" element={<EditEmployee />} />
          <Route path="/view/:id" element={<ViewEmployee />} />
          <Route path="/delete/:id" element={<DeleteEmployee />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
