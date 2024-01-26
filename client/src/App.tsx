import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./pages/Profile";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Header from "./components/Header";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/profile" Component={Profile} />
        <Route path="/about" Component={About} />
        <Route path="/sign-in" Component={SignIn} />
        <Route path="/sign-up" Component={SignUp} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
