import React, { useState } from "react";

function Rechercher() {
  const [type, setType] = useState("");
  const [resultas, setResultas] = useState([]);

  const list = [
    { nom: "banane", type: "fruit" },
    { nom: "orange", type: "fruit" },
    { nom: "pomme", type: "fruit" },
    { nom: "raisins", type: "fruit" },
    { nom: "kiwi", type: "fruit" },
    { nom: "tomate", type: "legume" },
    { nom: "carotte", type: "legume" },
    { nom: "pomme de terre", type: "legume" },
    { nom: "navet", type: "legume" },
    { nom: "poivron", type: "legume" },
  ];

  function handleSubmit(e) {
    e.preventDefault();
    const typeInput = e.target.type.value.toLowerCase();
    setType(typeInput);
    setResultas(list.filter((e) => e.type === typeInput));
  }

  return (
    <>
      {/* STYLE DANS LE MÊME FICHIER */}
      <style>{`
        .rechercher-container {
          max-width: 420px;
          margin: 80px auto;
          padding: 25px;
          border-radius: 15px;
          background: #fff;
          box-shadow: 0 15px 40px rgba(0,0,0,0.15);
          font-family: 'Segoe UI', sans-serif;
          text-align: center;
        }

        h1 {
          color: #2a5298;
          margin-bottom: 20px;
        }

        form {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        label {
          text-align: left;
          font-weight: 600;
        }

        input {
          padding: 10px;
          border-radius: 8px;
          border: 1px solid #ccc;
          font-size: 14px;
        }

        input:focus {
          outline: none;
          border-color: #2a5298;
        }

        button {
          padding: 10px;
          border-radius: 8px;
          border: none;
          background: linear-gradient(135deg, #1e3c72, #2a5298);
          color: white;
          font-weight: bold;
          cursor: pointer;
          transition: 0.3s;
        }

        button:hover {
          opacity: 0.85;
        }

        .type-info {
          margin-top: 15px;
          font-weight: 600;
        }

        .empty {
          color: #dc3545;
          font-weight: bold;
          margin-top: 10px;
        }

        ul {
          list-style: none;
          padding: 0;
          margin-top: 15px;
        }

        li {
          background: #f4f6f8;
          padding: 8px;
          border-radius: 8px;
          margin-bottom: 8px;
        }
      `}</style>

      <div className="rechercher-container">
        <h1>Recherche d'aliments</h1>

        <form onSubmit={handleSubmit}>
          <label>Type (fruit / legume)</label>
          <input
            type="text"
            name="type"
            placeholder="fruit ou legume"
            required
          />
          <button type="submit">Chercher</button>
        </form>

        {type && (
          <p className="type-info">
            Résultat pour : <strong>{type}</strong>
          </p>
        )}

        {resultas.length === 0 && type && (
          <p className="empty">Aucun résultat trouvé ❌</p>
        )}

        <ul>
          {resultas.map((item, index) => (
            <li key={index}>{item.nom}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Rechercher;