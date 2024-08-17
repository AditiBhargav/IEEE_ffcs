"use client"
import React, { useState } from 'react';
import { data } from '../../../dummy data/data';
import { users } from '../../../dummy data/users';
import { X } from 'lucide-react';
import { useRouter } from 'next/navigation';

const Modal = ({ onClose }) => {

  const availSlugs = data.map(item => item.slug);
  const Router = useRouter();
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [date, setDate] = useState();
  const [selected, setSelected] = useState([]);

  const slugify = (text) => {
    let slug = text.toString().toLowerCase()
      .replace(/\s+/g, '-')           // Replace spaces with -
      .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
      .replace(/\-\-+/g, '-')         // Replace multiple - with single -
      .replace(/^-+/, '')             // Trim - from start of text
      .replace(/-+$/, '');            // Trim - from end of text
    let subs = slug;
    let count = 0;
    while (availSlugs.includes(subs)) {
      count++;
      subs = `${slug}-${count}`;
    }
    return subs;
  }

  const handleSelect = (event) => {
    if (selected.includes(event.target.value)) {
      alert("Already selected");
    } else {
      setSelected([...selected, event.target.value]);
    }
  };


  const handleChange = (e) => {
    if (e.target.name == 'name') {
      setName(e.target.value);
    } else if (e.target.name == 'desc') {
      setDesc(e.target.value);
    } else if (e.target.name == 'deadline') {
      setDate(e.target.value);
    } 
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !desc || !date || (selected.length == 0)) {
      alert('Fill all the fields');
      return;
    }
    const newData = {
      id: data[data.length - 1].id + 1,
      Name: name,
      Status: 'true',
      deadline: date,
      desc: desc,
      slug: slugify(name),
      assignedTo: selected
    }
    // console.log(newData);
    const response = await fetch('http://localhost:3000/api/addAssignment', {
      method: 'POST',
      gthgthnheaders: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newData)
    });
    const res = await response.json();
    Router.refresh();
    onClose();
  }

  return (
    <div className='flex justify-center items-center min-w-max fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm'>
      <div className='flex flex-col gap-5'>
        <button className='place-self-end' onClick={onClose}><X className="text-white" /></button>
        <div className='bg-gray-700 p-5 rounded-lg'>
          <h1>Add Assignment</h1>
          <form className='flex flex-col gap-5 m-4 text-black'>
            <div>
              <input onChange={handleChange} type="text" name="name" id="name" placeholder='Name' />
            </div>
            <div>
              <input onChange={handleChange} type="text" name="desc" id="desc" placeholder='Description' />
            </div>
            <div>
              <input onChange={handleChange} type="date" name="deadline" id="deadline" />
            </div>
            <div>
              <select value={selected} onChange={handleSelect} name="users" id="users">
                {users.map((user, index) => {
                  return (
                    <option onClick={handleSelect} key={index} value={user["name"]}>{user["name"]}</option>
                  )
                })}
              </select>
            </div>
            <div className='text-white'>
              Selected People:
              <div className='flex flex-col max-h-32 overflow-y-auto'>
                {selected.map((user, index) => {
                  return (
                    <div key={index} className='flex flex-row'>
                      <p>{user}</p>
                      <X onClick={() => setSelected(selected.filter(item => item !== user))} className="text-white float-right cursor-pointer" />
                    </div>
                  )
                })}
              </div>
            </div>
            <div><button type='submit' onClick={handleSubmit}>Add</button></div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Modal