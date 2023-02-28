import Restaurant from "./restaurant";

type RestaurantsType = {
  add(): void;
  filterByCategory(): Restaurant;
};

const Restaurants: RestaurantsType = {
  add() {},
  filterByCategory() {
    return new Restaurant("", "", 0, [""]);
  },
};

export default Restaurants;
