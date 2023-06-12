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

import Arr1 from './arrComponents/arr1'
import Arr2 from './arrComponents/arr2'
import Arr3 from './arrComponents/arr3'
import Arr4 from './arrComponents/arr4'
import Arr5 from './arrComponents/arr5'

import Har1 from './harrisComponents/har1'
import Har2 from './harrisComponents/har2'
import Har3 from './harrisComponents/har3'
import Har4 from './harrisComponents/har4'
import Har5 from './harrisComponents/har5'


import Sana1 from './sanaComponents/sana1'
import Sana2 from './sanaComponents/sana2'
import Sana3 from './sanaComponents/sana3'
import Sana4 from './sanaComponents/sana4'
import Sana5 from './sanaComponents/sana5'

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

          <Route path="/arr1" element={<Arr1 />} />
          <Route path="/arr2" element={<Arr2 />} />
          <Route path="/arr3" element={<Arr3 />} />
          <Route path="/arr4" element={<Arr4 />} />
          <Route path="/arr5" element={<Arr5 />} />

          <Route path="/har1" element={<Har1 />} />
          <Route path="/har2" element={<Har2 />} />
          <Route path="/har3" element={<Har3 />} />
          <Route path="/har4" element={<Har4 />} />
          <Route path="/har5" element={<Har5 />} />

          <Route path="/san1" element={<Sana1 />} />
          <Route path="/san2" element={<Sana2 />} />
          <Route path="/san3" element={<Sana3/>} />
          <Route path="/san4" element={<Sana4 />} />
          <Route path="/san5" element={<Sana5 />} />
          


          {/* Signup & login */}
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