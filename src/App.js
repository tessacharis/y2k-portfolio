import { CursorifyProvider } from "@cursorify/react";
import CustomCursor from "./components/CustomCursor.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout.js";
import About from "./pages/About.js";
import Home from "./pages/Home.js";
import Work from "./pages/Work.js";
import Help from "./pages/Help.js";
import MentorcliQ from "./pages/Mentorcliq.js";
import WIADCC from "./pages/WIADCC.js";
import UHM from "./pages/UHM.js";
import Delete from "./pages/Delete.js";
import NoPage from "./pages/NoPage.js";
import "./styles/app.scss";

export default function App() {
  return (
    <CursorifyProvider cursor={<CustomCursor />}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
            <Route path="/work/mentorcliq" element={<MentorcliQ />} />
            <Route path="/work/wia-dcc" element={<WIADCC />} />
            <Route path="/work/uhm" element={<UHM />} />
            <Route path="/delete" element={<Delete />} />
            <Route path="/help" element={<Help />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CursorifyProvider>
  );
}
