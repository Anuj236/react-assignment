import initialRestaurants from "./initialData";

const getRestaurantsFromStorage = () => {
    const restaurantsJson = localStorage.getItem("restaurants");
    return restaurantsJson ? JSON.parse(restaurantsJson) : initialRestaurants;
};

const saveRestaurantsToStorage = (restaurants) => {
    localStorage.setItem("restaurants", JSON.stringify(restaurants));
};

export { getRestaurantsFromStorage, saveRestaurantsToStorage };
