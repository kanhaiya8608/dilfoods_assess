"use client";
import { remove } from '@/app/Redux/Cartslice';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';

const Cartpage = () => {
    const dispatch = useDispatch();
    const cartitems = useSelector((state) => state.cart);

    const handleremove = (id) => {
        dispatch(remove(id));
    };

    return (
        <div className="container mx-auto ">
            <h3 className="text-3xl font-semibold mb-4">Cart page</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {cartitems.map((item) => (
                    <div key={item.id} className="p-4 border rounded-lg shadow-md">
                        <div className=" mb-2">
                            <img  src={`/${item.image}`} alt="img" width='500' height='600' />
                        </div>
                        <h5 className="text-xl font-semibold mb-2">{item.title}</h5>
                        <h5 className="text-lg font-medium mb-2">${item.price}</h5>
                        <button
                            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none"
                            onClick={() => handleremove(item.id)}
                        >
                            Remove
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cartpage;
