import React, { useState, useEffect } from 'react';
import { useParams, useNavigate} from 'react-router-dom';
import { getRestaurantsFromStorage } from '../utils/storageUtils';

const EditRestaurant = ({ onSave }) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [pincode, setPincode] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRestaurantData = async () => {
      const restaurants = await getRestaurantsFromStorage();
      const restaurant = restaurants.find((r) => r.id === parseInt(id));
      if (restaurant) {
        setName(restaurant.name);
        setAddress(restaurant.address);
        setPincode(restaurant.pincode);
        setMobileNumber(restaurant.mobileNumber);
        setEmail(restaurant.email);
        setWebsite(restaurant.website);
      } else {
       navigate('/');
      }
    };

    fetchRestaurantData();
  }, [id, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedRestaurant = {
      id: parseInt(id),
      name,
      address,
      pincode,
      mobileNumber,
      email,
      website,
    };
    onSave(updatedRestaurant);
    navigate('/');
  };

  return (
    <div className="bg-slate-900 min-h-screen flex items-center justify-center mt-8">
      <div className="bg-zinc-900 p-8 rounded  w-full max-w-md ">
      <h2 className="text-2xl text-white text-center mb-6">Edit Restaurant</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="block text-white text-sm font-bold mb-2" htmlFor="name">Name:</label>
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
          <label className="block text-white text-sm font-bold mb-2" htmlFor="address">Address:</label>
          <input className="border rounded w-full py-2 px-3 text-white  bg-slate-900 mb-2"
            type="text"
            id="address"
            value={address}
            placeholder="Enter Restaurant Address"
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-white text-sm font-bold mb-2" htmlFor="pincode">Pincode:</label>
          <input className="border rounded w-full py-2 px-3 text-white  bg-slate-900 mb-2"
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
          <label className="block text-white text-sm font-bold mb-2" htmlFor="mobileNumber">Mobile Number:</label>
          <input className="border rounded w-full py-2 px-3 text-white  bg-slate-900 mb-2"
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
          <label className="block text-white text-sm font-bold mb-2" htmlFor="email">Email:</label>
          <input className="border rounded w-full py-2 px-3 text-white  bg-slate-900 mb-2"
            type="email"
            id="email"
            value={email}
            placeholder="Enter Email Address"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-white text-sm font-bold mb-2" htmlFor="website">Website:</label>
          <input className="border rounded w-full py-2 px-3 text-white  bg-slate-900 mb-2"
            type="text"
            id="website"
            value={website}
            placeholder="Restaurant Website Url"
            onChange={(e) => setWebsite(e.target.value)}
            required
          />
        </div>
      <div className="flex items-center justify-between mt-4">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded " type="submit">
        Save Changes
      </button>
      <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded " type="button" onClick={() => navigate('/')}>
        Cancel
      </button>
    </div>
      </form>
    </div>
    </div>
  );
};

export default EditRestaurant;