import React, { useState } from "react";
import "./css/Home.css";
import data from "../data/data";
import { Link } from "react-router-dom";
import logo from "../img/kv_logo_3.png";

const Home = () => {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="home">
      <div className="search_engine">
        <h1>Search Your Protein</h1>
        <input
          type="text"
          onChange={handleChange}
          placeholder="eg: PAK1, Q13153, Serine/threonine-protein kinase PAK 1"
        />
      </div>
      <div className="dropdown">
        {data
          .filter((item) => {
            return search.toLowerCase() === ""
              ? item
              : item.name.toLowerCase().includes(search.toLowerCase()) ||
                  item.uniprotId.toLowerCase().includes(search.toLowerCase()) ||
                  item.protein_name
                    .toLowerCase()
                    .includes(search.toLowerCase());
          })
          .slice(0, 3)
          .map((item) => (
            <ul key={item.id} className="results">
              <Link to="/results" state={{ item }} className="result_link">
                <div className="pic">
                  <img src={logo} width="100px" alt="protein.png" />
                </div>
                <div className="result_list">
                  <div className="first_list">
                    <li>
                      <span style={{ fontWeight: "bold" }}>Name: </span>
                      {item.name}
                    </li>
                    <li>
                      <span style={{ fontWeight: "bold" }}>Gene Name: </span>
                      {item.gene_name}
                    </li>
                  </div>
                  <div className="second_list">
                    <li>
                      <span style={{ fontWeight: "bold" }}>Protein Name: </span>
                      {item.protein_name}
                    </li>
                    <li>
                      <span style={{ fontWeight: "bold" }}>Uniprot ID: </span>
                      {item.uniprotId}
                    </li>
                  </div>
                </div>
              </Link>
            </ul>
          ))}
      </div>
    </div>
  );
};

export default Home;
