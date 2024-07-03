"use client"
import React, { useState } from 'react'

const Form = () => {
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
    )
}

export default Form;