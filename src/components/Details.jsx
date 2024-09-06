import { useLocation, useNavigate } from "react-router";
import { Fruits } from "../mock/fruits";

export default function Details() {
  const location = useLocation();
  const navigate = useNavigate();
  const { pathname } = location;

  const fruitId = pathname.slice(1);

  const fruit = Fruits.find((fruit) => fruit.id === Number(fruitId));

  function renderList(property) {
    return (
      <li key={property.title}>
        <strong>{property.title}</strong>
        {property.value}
      </li>
    );
  }

  return (
    <>
      <div>
        <button onClick={() => navigate("/")}>Back</button>
        <div className="fruit_details">
          <ul>
            {renderList({ title: "Name: ", value: fruit.name })}
            {renderList({ title: "Family: ", value: fruit.family })}
            {renderList({ title: "Order: ", value: fruit.order })}
            {renderList({ title: "Genus: ", value: fruit.genus })}
            <li>
              <strong>Nutrition: </strong>
              <table>
                <thead>
                  <tr>
                    <th>Calories</th>
                    <th>Fat</th>
                    <th>Sugar</th>
                    <th>Carbohydrates</th>
                    <th>Protein</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{fruit.nutritions.calories}</td>
                    <td>{fruit.nutritions.fat}</td>
                    <td>{fruit.nutritions.sugar}</td>
                    <td>{fruit.nutritions.carbohydrates}</td>
                    <td>{fruit.nutritions.protein}</td>
                  </tr>
                </tbody>
              </table>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
