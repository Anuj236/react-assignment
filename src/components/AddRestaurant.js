import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddRestaurant = ({ onAdd }) => {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [pincode, setPincode] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [email, setEmail] = useState("");
    const [website, setWebsite] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newRestaurant = {
            id: Date.now(),
            name,
            address,
            pincode,
            mobileNumber,
            email,
            website,
        };
        onAdd(newRestaurant);
        resetForm();
        navigate("/");
    };

    const resetForm = () => {
        setName("");
        setAddress("");
        setPincode("");
        setMobileNumber("");
        setEmail("");
        setWebsite("");
    };

    return (
        <div className="bg-slate-900 min-h-screen flex items-center justify-center mt-8">
            <div className="bg-zinc-900 p-8 rounded  w-full max-w-md ">
                <h2 className="text-2xl text-white text-center mb-6">
                    Add Restaurant
                </h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label
                            className="block text-white text-sm font-bold mb-2"
                            htmlFor="name"
                        >
                            Name:
                        </label>
                        <input
                            className="border rounded w-full py-2 px-3 text-white  bg-slate-900 mb-2"
                            type="text"
                            id="name"
                            value={name}
                            placeholder="Enter Restaurant Name"
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label
                            className="block text-white text-sm font-bold mb-2"
                            htmlFor="address"
                        >
                            Address:
                        </label>
                        <input
                            className="border rounded w-full py-2 px-3 text-white  bg-slate-900 mb-2"
                            type="text"
                            id="address"
                            value={address}
                            placeholder="Enter Restaurant Address"
                            onChange={(e) => setAddress(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label
                            className="block text-white text-sm font-bold mb-2"
                            htmlFor="pincode"
                        >
                            Pincode:
                        </label>
                        <input
                            className="border rounded w-full py-2 px-3 text-white  bg-slate-900 mb-2"
                            type="text"
                            id="pincode"
                            value={pincode}
                            pattern="\d{5}"
                            placeholder="Enter 5-digit pincode"
                            onChange={(e) => setPincode(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label
                            className="block text-white text-sm font-bold mb-2"
                            htmlFor="mobileNumber"
                        >
                            Mobile Number:
                        </label>
                        <input
                            className="border rounded w-full py-2 px-3 text-white  bg-slate-900 mb-2"
                            type="text"
                            id="mobileNumber"
                            value={mobileNumber}
                            pattern="[1-9]{1}[0-9]{9}"
                            placeholder="Enter 10-digit mobile number"
                            onChange={(e) => setMobileNumber(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label
                            className="block text-white text-sm font-bold mb-2"
                            htmlFor="email"
                        >
                            Email:
                        </label>
                        <input
                            className="border rounded w-full py-2 px-3 text-white  bg-slate-900 mb-2"
                            type="email"
                            id="email"
                            value={email}
                            placeholder="Enter Email Address"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label
                            className="block text-white text-sm font-bold mb-2"
                            htmlFor="website"
                        >
                            Website:
                        </label>
                        <input
                            className="border rounded w-full py-2 px-3 text-white  bg-slate-900 mb-2"
                            type="text"
                            id="website"
                            value={website}
                            placeholder="Restaurant Website Url"
                            onChange={(e) => setWebsite(e.target.value)}
                            required
                        />
                    </div>
                    <div className="flex justify-between mt-2 sm:mt-1 md:mt-2 lg:mt-3 xl:mt-4">
                        <button
                            type="submit"
                            className="py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded"
                        >
                            Add Restaurant
                        </button>
                        <button
                            type="button"
                            onClick={() => navigate("/")}
                            className="py-2 px-4 bg-red-500 hover:bg-red-700 text-white font-bold rounded"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddRestaurant;
