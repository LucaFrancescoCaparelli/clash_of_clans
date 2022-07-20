import "./App.css";
import Content from "./components/Content";
import Layout from "./components/Layout";
import PageDetail from "./components/PageDetail";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DataProvider } from "./context/DataContext";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <DataProvider>
        <Router>
          <Routes>
            <Route path="/*" element={<Layout />} />
            <Route index element={<Content />} />
            <Route path="details">
              <Route path=":id" element={<PageDetail />} />
            </Route>
          </Routes>
        </Router>
      </DataProvider>
      <Footer />
    </>
  );
}

export default App;
