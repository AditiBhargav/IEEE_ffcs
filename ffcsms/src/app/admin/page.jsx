"use client"
import React, { useState } from "react";
import Link from "next/link";
import { data } from "../../../dummy data/data";
import Modal from "./modal";

export default function Page() {

    const [query, setQuery] = useState('');
    const [open, setOpen] = useState(false);

    return (
        <div className="min-h-max">
            Assign asignments
            <div className="m-5 w-2/3 mx-auto">
                <h1>Active Assignments:</h1>
                <div>
                    <input className="text-black" type="text" name="search" id="search" value={query || ''} placeholder="Search" onChange={e => setQuery(e.target.value)} />
                </div>
                <div className="m-5 max-h-[50vh] overflow-y-auto">
                    <table className="table-auto w-full mb-5">
                        <thead className="border-b-2">
                            <tr className="font-semibold">
                                <th>Sr. No.</th>
                                <th>Name</th>
                                <th>Status</th>
                                <th>Deadline</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.filter(item => item.Name.toLowerCase().includes(query)).map((item) => (
                                <tr className="border-b text-center m-2" key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.Name}</td>
                                    <td>{item.Status}</td>
                                    <td>{item.deadline}</td>
                                    <td><Link href={`/assignment/${item.slug}`}>View</Link></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <button onClick={() => setOpen(true)} className='py-2 px-4 bg-pink-500 hover:bg-pink-600 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg'>Add Assignment</button>
                {open && <Modal onClose={() => setOpen(false)}/>}
            </div>
        </div >
    );
}