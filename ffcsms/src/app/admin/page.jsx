"use client"
import React, { useState } from "react";
import Link from "next/link";
import { data } from "../../../dummy data/data";

export default function Page() {

    const [query, setQuery] = useState('');

    return (
        <div className="min-h-max">
            Asign asignments
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
                            {data.filter(item => item["Name of Assignment"].toLowerCase().includes(query)).map((item) => (
                                <tr className="border-b text-center m-2" key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item["Name of Assignment"]}</td>
                                    <td>{item["status"]}</td>
                                    <td>{item["deadline"]}</td>
                                    <td><Link href={`/assignment/${item.slug}`}>View</Link></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div >
    );
}