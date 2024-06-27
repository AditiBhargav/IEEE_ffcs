"use client"
import React, { useState } from 'react'

const Assignment = () => {

    const [links, setLinks] = useState("")

    const handleURL = (e) => {
        setLinks(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // TODO: send data to backend
    }

    return (
        <div>
            <section className="body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">
                            Yoveo
                        </h1>
                        <div className='flex flex-col space-y-4 my-5'>
                            <div>
                                Status: M
                            </div>
                            <div>
                                Deadline: 7 24 2023
                            </div>
                            <form onSubmit={handleSubmit}>
                                <div className="mt-5">
                                    <label className="font-semibold text-sm text-gray-600 pb-1 block" htmlFor="login">Link Submission</label>
                                    <input className="border text-black rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" placeholder='Enter your email' onChange={handleURL} value={links} type="url" id="link" required />
                                </div>
                                <div className="mt-5">
                                    <button className="py-2 px-4 bg-pink-500 hover:bg-pink-600 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg" type="submit">
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="flex justify-center">
                            <button onClick={handleSubmit} className="inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Assignment