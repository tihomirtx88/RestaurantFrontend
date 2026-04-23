import MenuItemCard from "./MenuItemCard";

function MenuSection() {
  return (
    <div className="container-xxl py-5">
      <div className="container">

        <h1 className="text-center mb-5">Most Popular Items</h1>

        <div className="row g-4">

          <MenuItemCard
            name="Chicken Burger"
            price={115}
            description="Delicious burger"
            image="/img/menu-1.jpg"
          />

          <MenuItemCard
            name="Pizza"
            price={90}
            description="Italian pizza"
            image="/img/menu-2.jpg"
          />

        </div>

      </div>
    </div>
  );
}

export default MenuSection;