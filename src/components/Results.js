import React from "react";
import { useLocation } from "react-router-dom";
import Viztein from "viztein";
import "./css/Results.css";

const Results = () => {
  const location = useLocation();
  const { item } = location.state || {};

  if (!item) {
    return <div>No data available</div>;
  }

  const viewportStyle = {
    backgroundColor: "white",
    width: "500px",
    height: "500px",
  };

  return (
    <div className="result-page">
      <ul>
        <div className="header">
          <li>
            <h1>{item.name}</h1>
          </li>
        </div>
        <div className="gen-info">
          <li>{item.gene_name}</li>
          <li>{item.protein_name}</li>
          <li>{item.uniprotId}</li>
        </div>
        <div className="function">
          <li>{item.function}</li>
        </div>
        <div className="sequence">
          <li>{item.sequence}</li>
        </div>
        <div className="isoform">
          <li>{item.isoformID}</li>
        </div>
        <div className="mutation">
          <li>
            {item.mutation} {item.transcriptase}
          </li>
        </div>
        <div className="fda-drugs">
          {item.drug.map((drug) =>
            drug.name ? (
              <li>
                <img src={drug.img} alt={drug.name} />
              </li>
            ) : (
              <li>
                <p>No Drugs Available</p>
              </li>
            )
          )}
        </div>
        <div className="cell-line">
          <table>
            <tr>
              <th>Name</th>
              <th>Dependency</th>
              <th>Disease</th>
            </tr>
            {item.cell_lines.map((cell) => (
              <tr>
                <td>{cell.name}</td>
                <td>{cell.dependency}</td>
                <td>{cell.disease}</td>
              </tr>
            ))}
          </table>
        </div>
        <div className="small-mol">
          <table>
            <tr>
              <th>Name</th>
              <th>Structure</th>
            </tr>
            {item.drug_small_mol.map((mol) => (
              <tr>
                <td>{mol.small_mol}</td>
                <td>
                  <img src={mol.mol_img} alt="mol.png" width="250px" />
                </td>
              </tr>
            ))}
          </table>
        </div>
        <div className="native-structure">
          {item.native.length > 0 && (
            <div className="native-3d">
              {item.native.map((pdb, index) => (
                <div className="native" key={index}>
                  <h1>Native Structure:</h1>
                  <Viztein
                    data={{ filename: `${pdb}` }}
                    viewportStyle={viewportStyle}
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="complex-structure">
          {item.complex.length > 0 && (
            <div className="complex-3d">
              <h1>Complex Structure:</h1>
              {item.complex.map((pdb, index) => (
                <div className="complex" key={index}>
                  <Viztein
                    data={{ filename: `${pdb}` }}
                    viewportStyle={viewportStyle}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </ul>
    </div>
  );
};

export default Results;
