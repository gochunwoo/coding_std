import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Member from "./pages/Member";
import MemberInsForm from "./pages/MemberInsForm";
import MemberUpdateForm from "./pages/MemberUpdateForm";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/members" element={<Member />} />
        <Route path="/members/new" element={<MemberInsForm />} />
        <Route path="/members/:num/edit" Component={MemberUpdateForm} />
      </Routes>
    </div>
  );
}

export default App;
