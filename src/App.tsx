// import logo from "./logo.svg";
import "./App.css";
// import { useState } from "react";
import { Routes, Route } from "react-router-dom";
// import { UtilButtons } from "components/UtilButtons";
// import * as API from "services/api";
// import { Sprint } from "components/Sprint";
import { Nav } from "@/components/Nav";
// import vocabData from "vocabData.json";
import { MainPage } from "@/pages/MainPage";
import LoginPage from "@/pages/LoginPage";
import SprintPage from "@/pages/SprintPage";
import { AppBar } from '@/components/AppBar';

function App() {
  return (
    <div className="App">
      <AppBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sprint" element={<SprintPage />} />
        <Route path="*" element={ <MainPage />} />
      </Routes>
    </div>
  );
}

export default App;
