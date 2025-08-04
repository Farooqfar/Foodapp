"use client"
import axios from 'axios'
import { React, useState, useEffect } from 'react'

export default function page() {
    const [order, setOrder] = useState([])
    const handleOrder = async () => {
        let { data } = await axios.get("https://foodapp-pi-three.vercel.app/api/order");
        console.log(data.order)
        setOrder(data.order);
    }

    useEffect(() => {
        handleOrder()
    }, [])
    return (
        <main className="flex justify-center items-start  w-screen min-h-screen  bg-white">
            <table className="table table-zebra table-bordered border w-[80%] m-10">
                <thead className="bg-black text-white ">
                    <tr>
                        <th>No.</th>
                        <th>Name</th>
                        <th>Food</th>
                        <th>Address</th>
                        <th>Phone no.</th>
                        <th>Status</th>
                        <th>Deliver</th>
                    </tr>
                </thead>
                <tbody className="bg-yellow-300">
                    {
                        order.map((item, index) => {
                            return (<tr key={item._id}>
                                <td>{index + 1}</td>
                                <td>{item.fullname}</td>
                                <td>{item.food}</td>
                                <td>{item.address}</td>
                                <td>{item.phone}</td>
                                <td>
                                    <button className="btn btn-secondary">pending</button>
                                </td>
                                <td>
                                    <button className="btn btn-success">Delivered</button>
                                </td>

                            </tr>)
                        })
                    }



                </tbody>
            </table>


        </main>
    )
}
