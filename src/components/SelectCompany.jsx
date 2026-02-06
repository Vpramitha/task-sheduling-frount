import React from "react";
import "./SelectCompany.css";

const companies = [
  {
    id: "1",
    name: "TechSoft Pvt Ltd",
    logo: "https://img.freepik.com/free-vector/bird-colorful-gradient-design-vector_343694-2506.jpg?semt=ais_hybrid&w=740&q=80"
  },
  {
    id: "2",
    name: "Blue Ocean Solutions",
    logo: "https://i.pinimg.com/564x/d2/c1/6d/d2c16d99034f9407fd708dfc3356c688.jpg"
  },
  {
    id: "3",
    name: "NextGen Labs",
    logo: "https://thumbs.dreamstime.com/b/creative-simple-dragons-silhouettes-logo-stylized-vector-illustrations-simple-dragons-silhouettes-logo-130475058.jpg"
  }
];

const SelectCompany = () => {
  const handleSelectCompany = (companyId) => {
    console.log("Selected company:", companyId);
    // navigate("/dashboard");
  };

  const handleCreateCompany = () => {
    console.log("Create new company");
    // navigate("/company/create");
  };

  return (
    <div className="select-company-container">
      <h1 className="page-title">Select Your Company</h1>

      <div className="company-grid">
        {companies.map((company) => (
          <div
            key={company.id}
            className="company-card"
            onClick={() => handleSelectCompany(company.id)}
          >
            <img
              src={company.logo}
              alt={company.name}
              className="company-logo"
            />
            <h2 className="company-name">{company.name}</h2>
          </div>
        ))}

        {/* Create New Company */}
        <div
          className="company-card create-card"
          onClick={handleCreateCompany}
        >
          <div className="plus-icon">+</div>
          <h2 className="company-name">Create New Company</h2>
        </div>
      </div>
    </div>
  );
};

export default SelectCompany;
