import { useState } from "react";
import MenuItemCard from "./MenuItemCard";
import { useMenu } from "../hooks/useMenu";

function MenuSection() {
  const [category, setCategory] = useState("breakfast");

  const { items, loading } = useMenu(category);
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <h1 className="text-center mb-5">Most Popular Items</h1>

        {/* Category tabs */}
        <div className="text-center mb-4">
          <button
            onClick={() => setCategory("breakfast")}
            className="btn btn-primary m-2"
          >
            Breakfast
          </button>

          <button
            onClick={() => setCategory("lunch")}
            className="btn btn-outline-primary m-2"
          >
            Lunch
          </button>

          <button
            onClick={() => setCategory("dinner")}
            className="btn btn-outline-primary m-2"
          >
            Dinner
          </button>
        </div>

        {/* LOADING */}
        {loading && <p>Loading...</p>}

        {/* Items */}
        <div className="row g-4">
          {items.map((item) => (
            <MenuItemCard
              key={item.id}
              name={item.name}
              price={item.price}
              description={item.description}
              image={item.image_url}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MenuSection;
