import React, { useState } from "react";
import NavBar from "../components/navbar";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Portfolio() {
  const [currentPage, setCurrentPage] = useState("portfolio");

  const renderPage = () => {
    if (currentPage === "navbar") {
      return <NavBar />;
    } else if (currentPage === "header") {
      return <Header />;
    } else if (currentPage === "footer") {
      return <Footer />;
    }
  };

  return (
    <div>
      <NavBar />
      {renderPage()}
      <Footer />
    </div>
  );
}
