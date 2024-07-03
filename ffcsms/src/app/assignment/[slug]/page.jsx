"use client"
import React, { useState, useEffect } from 'react';
import Form from '../../../components/form';


const Assignment =  ({ params }) => {
    const [data, setData] = useState();
    const fetch = async (params) => {
        const res = await fetchAssignment(params.slug);
        setData(res);
    }
    useEffect(() => {
      fetch(params);
    }, []);
    return (
        <div>
            <section className="body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">
                            {data && data.Name}
                        </h1>
                        <div className='flex flex-col space-y-4 my-5'>
                            <div>
                                Status: {data && data.Status}
                            </div>
                            <div>
                                Deadline: {data && data.deadline}
                            </div>
                        </div>
                        <Form />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Assignment

export async function fetchAssignment(slug) {
    const res = await fetch(`http://localhost:3000/api/getassignment?slug=${slug}`, { cache: "no-store" });
    const assignment = await res.json();
    console.log(assignment);
    return assignment;
}