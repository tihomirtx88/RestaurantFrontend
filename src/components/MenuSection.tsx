import { useState } from "react";
import MenuItemCard from "./MenuItemCard";
import { useMenu } from "../hooks/useMenu";
import useAnimateOnScroll from "../hooks/useAnimateOnScroll";

function MenuSection() {

  const titleRef = useAnimateOnScroll();

  const [category, setCategory] = useState("breakfast");

  const { items, loading } = useMenu(category);

  return (
    <div className="container-xxl py-5" style={{ backgroundColor: "#eeeeee" }}>
      <div className="container">

        {/* TITLE */}
        <div ref={titleRef} className="text-center mb-5 animate">
          <h5 className="section-title text-primary fw-normal">
            Food Menu
          </h5>

          <h1>Most Popular Items</h1>
        </div>

        {/* TABS */}
        <div className="text-center mb-5">
          <div className="d-inline-flex border-bottom">

            <button
              onClick={() => setCategory("breakfast")}
              className={`menu-tab ${category === "breakfast" ? "active" : ""}`}
            >
              Breakfast
            </button>

            <button
              onClick={() => setCategory("lunch")}
              className={`menu-tab ${category === "lunch" ? "active" : ""}`}
            >
              Lunch
            </button>

            <button
              onClick={() => setCategory("dinner")}
              className={`menu-tab ${category === "dinner" ? "active" : ""}`}
            >
              Dinner
            </button>

          </div>
        </div>

        {/* LOADING */}
          {loading && <p className="text-center">Loading...</p>}

        {/* Items */}
        <div className="row g-4">
          {items.map((item) => (
            <MenuItemCard
              key={item.id}
              id={item.id}
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
