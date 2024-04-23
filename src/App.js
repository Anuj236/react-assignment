import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {
    getRestaurantsFromStorage,
    saveRestaurantsToStorage,
} from "./utils/storageUtils";
import RestaurantTable from "./components/RestaurantTable";
import AddRestaurant from "./components/AddRestaurant";
import EditRestaurant from "./components/EditRestaurantTable";

const App = () => {
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        const fetchRestaurantData = async () => {
            const data = await getRestaurantsFromStorage();
            setRestaurants(data);
        };

        fetchRestaurantData();
    }, []);

    const handleAddRestaurant = (newRestaurant) => {
        const updatedRestaurants = [...restaurants, newRestaurant];
        setRestaurants(updatedRestaurants);
        saveRestaurantsToStorage(updatedRestaurants);
    };

    const handleEditRestaurant = (updatedRestaurant) => {
        const updatedRestaurants = restaurants.map((restaurant) =>
            restaurant.id === updatedRestaurant.id
                ? updatedRestaurant
                : restaurant
        );
        setRestaurants(updatedRestaurants);
        saveRestaurantsToStorage(updatedRestaurants);
    };

    const handleDeleteRestaurant = (restaurantId) => {
        const updatedRestaurants = restaurants.filter(
            (restaurant) => restaurant.id !== restaurantId
        );
        setRestaurants(updatedRestaurants);
        saveRestaurantsToStorage(updatedRestaurants);
    };

    return (
        <Router>
            <div>
                <nav className="fixed top-0 w-full z-50  ">
                    <ul className="flex justify-end space-x-4 bg-slate-950 text-white p-4">
                        <li className=" flex space-x-2">
                            <Link
                                to="/"
                                className="relative block text-white  flex items-center justify-center rounded p-2 hover:bg-slate-900 hover:text-gray-300"
                            >
                                Home
                            </Link>

                            <Link
                                to="/add"
                                className="relative block text-white  flex items-center justify-center rounded p-2 hover:bg-slate-900 hover:text-gray-300"
                            >
                                Add Restaurant
                            </Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route
                        path="/add"
                        element={<AddRestaurant onAdd={handleAddRestaurant} />}
                    />
                    <Route
                        path="/edit/:id"
                        element={
                            <EditRestaurant onSave={handleEditRestaurant} />
                        }
                    />
                    <Route
                        path="/"
                        element={
                            <RestaurantTable
                                restaurants={restaurants}
                                onDelete={handleDeleteRestaurant}
                            />
                        }
                    />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
