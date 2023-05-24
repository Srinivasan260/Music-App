import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./home";
import Car from "./App";
import Got from "./trendingsongs";
import Car1 from "./Components/ani";
import Anirudhu1 from "./Components/ani1";
import Anirudhu2 from "./Components/ani2";
import Anirudhu3 from "./Components/ani3";
import Anirudhu4 from "./Components/ani4";
import Yuvan from "./u1Components/u1";
import Yuvan1 from "./u1Components/u2";
import Yuvan2 from "./u1Components/u3";
import Yuvan3 from "./u1Components/u4";
import Yuvan5 from "./u1Components/u5"
import Signy from "./signup";
import Login from "./login/login";
import Account from "./settings/account"
import About from "./settings/about"
import Personalinfo from "./settings/personalinfo";
import Help from "./settings/help";
import Update from './settings/update'


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/App" element={<Car />} />
          <Route path="/skills" element={<Got />} />
          <Route path="/ani" element={<Car1 />} />
          <Route path="/ani1" element={<Anirudhu1 />} />
          <Route path="/ani2" element={<Anirudhu2 />} />
          <Route path="/ani3" element={<Anirudhu3 />} />
          <Route path="/ani4" element={<Anirudhu4 />} />

          <Route path="/u1" element={<Yuvan />} />
          <Route path="/u2" element={<Yuvan1 />} />
          <Route path="/u3" element={<Yuvan2 />} />
          <Route path="/u4" element={<Yuvan3 />} />
          <Route path="/u5" element={<Yuvan5 />} />
          <Route path="/signup" element={<Signy />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Account-setting" element={<Account />} />
          <Route path="/" element={<Account />} />
          <Route path="/Account-setting" element={<Account />} />
          <Route path="/personal-info" element={<Personalinfo  />} />
          <Route path="/about-info" element={<About/>} />
          <Route path="/help-info" element={<Help />} />
          <Route path="/Update-info" element={<Update />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);