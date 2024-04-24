import { useNavigate } from "react-router-dom";

const DeleteRestaurant = ({ restaurant, onDelete, onCancel }) => {
    const navigate = useNavigate();

    const handleConfirm = () => {
        onDelete(restaurant.id);
        navigate("/");
    };

    const handleCancel = () => {
        onCancel();
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-slate-900 ml-8 ">
            <div className="max-w-md mx-auto bg-zinc-800 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                <div className="md:flex">
                    <div className="p-8">
                        <h2 className="text-2xl mb-4 text-center">
                            Confirm Delete
                        </h2>
                        <p className="mb-4 text-center">
                            Are you sure you want to delete the restaurant "
                            {restaurant.name}"?
                        </p>
                        <div className="flex justify-center">
                            <button
                                onClick={handleConfirm}
                                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
                            >
                                Confirm
                            </button>
                            <button
                                onClick={handleCancel}
                                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteRestaurant;
