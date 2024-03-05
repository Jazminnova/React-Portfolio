import React, { useState } from "react";
import NavBar from "../components/navbar";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Portfolio() {
  const [currentPage, setCurrentPage] = useState("portfolio");

  const renderPage = () => {
    if (currentPage === "navbar") {
      return <NavBar />;
    }
  };

  return (
    <div>
      <NavBar /> {}
      {renderPage()}{" "}
      {/* Calling the renderPage function to render the current page */}
      <Footer /> {/* Rendering the Footer component */}
    </div>
  );
}
