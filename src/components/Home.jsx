import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Fruits } from "../mock/fruits";

import "./styles.css";

const API = "www.fruityvice.com/api/fruit/1";
export default function Home() {
  const [fruits, setFruits] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    //fetchData();
    setFruits(Fruits);
  }, []);

  async function fetchData() {
    try {
      const data = await axios.get(API);
    } catch (e) {
      console.log(e);
    }
  }

  function handleClick(fruitId) {
    navigate(`/${fruitId}`);
  }

  return (
    <>
      <ul>
        {fruits.map((fruit) => {
          return (
            <li
              className="card"
              key={fruit.id}
              onClick={() => handleClick(fruit.id)}
            >
              <div>
                <strong>Name: </strong>
                {fruit.name}
              </div>
              <div>
                <strong>Family: </strong>
                {fruit.family}
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}
