import React, { useState, useEffect } from 'react';

const Form = () => {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    role: '',
    password: ''
  });

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    setUsers(storedUsers);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUsers = [...users, formData];
    setUsers(newUsers);
    localStorage.setItem('users', JSON.stringify(newUsers));
    setFormData({
      email: '',
      name: '',
      role: '',
      password: ''
    });
  };

  const handleDelete = (index) => {
    const newUsers = users.filter((_, i) => i !== index);
    setUsers(newUsers);
    localStorage.setItem('users', JSON.stringify(newUsers));
  };

  return (
    <div className="container mx-auto p-4 flex justify-center items-center flex-col">
      <h1 className="text-2xl mb-4">User Form</h1>
      <form className="mb-4" onSubmit={handleSubmit}>
        <div className="mb-2">
          <label className="block mb-1" htmlFor="email">Email</label>
          <input
            type="email  "
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border bg-gray-400 rounded-md"
            required
          />
        </div>
        <div className="mb-2">
          <label className="block mb-1" htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border  bg-gray-400  rounded-md"
            required
          />
        </div>
        <div className="mb-2">
          <label className="block mb-1" htmlFor="role">Role</label>
          <input
            type="text"
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full p-2 border  bg-gray-400 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1" htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 border  bg-gray-400 rounded-md"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded w-[100px] font-bold">
          Submit
        </button>
      </form>

      <h2 className="text-xl mb-2 p-4">Users</h2>
      <table className="w-full border-collapse border">
        <thead>
          <tr>
            <th className="border p-2 bg-blue-500 text-white">Email</th>
            <th className="border p-2 bg-red-500 text-white">Name</th>
            <th className="border p-2 bg-blue-500 text-white">Role</th>
            <th className="border p-2 bg-pink-600 text-white">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td className="border p-2">{user.email}</td>
              <td className="border p-2">{user.name}</td>
              <td className="border p-2">{user.role}</td>
              <td className="border p-2">
                <button
                  onClick={() => handleDelete(index)}
                  className="bg-red-500 text-white p-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Form;
