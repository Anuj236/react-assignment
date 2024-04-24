import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import DeleteRestaurant from "./DeleteRestaurant";

const RestaurantTable = ({ restaurants, onDelete }) => {
    const [selectedRestaurant, setSelectedRestaurant] = useState(null);
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

    const handleDeleteClick = (restaurant) => {
        setSelectedRestaurant(restaurant);
        setShowDeleteConfirmation(true);
    };

    const handleDeleteConfirmation = (confirmed) => {
        if (confirmed) {
            onDelete(selectedRestaurant.id);
        }
        setShowDeleteConfirmation(false);
        setSelectedRestaurant(null);
    };

    const handleCancelDelete = () => {
        setShowDeleteConfirmation(false);
        setSelectedRestaurant(null);
    };

    return (
        <div className="bg-slate-900 text-white min-h-screen flex flex-col">
            <h1 className="text-2xl mb-8 text-center mt-10">
                Restaurant Table
            </h1>
            <div className="overflow-x-auto">
                <table className="w-full table-auto">
                    <thead className="bg-yellow-500 hover:bg-yellow-700">
                        <tr className="text-center">
                            <th className="border px-2 py-3 text-xs font-medium text-white uppercase tracking-wider sm:px-6">
                                Name
                            </th>
                            <th className="border px-2 py-3 text-xs font-medium text-white uppercase tracking-wider sm:px-6">
                                Address
                            </th>
                            <th className="border px-2 py-3 text-xs font-medium text-white uppercase tracking-wider sm:px-6">
                                Pincode
                            </th>
                            <th className="border px-2 py-3 text-xs font-medium text-white uppercase tracking-wider sm:px-6">
                                Mobile Number
                            </th>
                            <th className="border px-2 py-3 text-xs font-medium text-white uppercase tracking-wider sm:px-6">
                                Email
                            </th>
                            <th className="border px-2 py-3 text-xs font-medium text-white uppercase tracking-wider sm:px-6">
                                Website
                            </th>
                            <th className="border px-2 py-3 text-xs font-medium text-white uppercase tracking-wider sm:px-6">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {restaurants.map((restaurant) => (
                            <tr key={restaurant.id} className="border">
                                <td className="border px-2 py-4 sm:px-6">
                                    {restaurant.name}
                                </td>
                                <td className="border px-2 py-4 sm:px-6">
                                    {restaurant.address}
                                </td>
                                <td className="border px-2 py-4 sm:px-6">
                                    {restaurant.pincode}
                                </td>
                                <td className="border px-2 py-4 sm:px-6">
                                    {restaurant.mobileNumber}
                                </td>
                                <td className="border px-2 py-4 sm:px-6">
                                    {restaurant.email}
                                </td>
                                <td className="border px-2 py-4 sm:px-6">
                                    {restaurant.website}
                                </td>
                                <td className="border px-2 py-4 sm:px-6 flex justify-center">
                                    <Link
                                        to={`/edit/${restaurant.id}`}
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                                    >
                                        Edit
                                    </Link>
                                    <button
                                        onClick={() =>
                                            handleDeleteClick(restaurant)
                                        }
                                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {showDeleteConfirmation && (
                <DeleteRestaurant
                    restaurant={selectedRestaurant}
                    onDelete={handleDeleteConfirmation}
                    onCancel={handleCancelDelete}
                />
            )}
        </div>
    );
};

export default RestaurantTable;
