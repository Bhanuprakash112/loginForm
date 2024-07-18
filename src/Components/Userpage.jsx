 

import React, { useState, useEffect } from 'react';

const UserDetails = "https://jsonplaceholder.typicode.com/posts";

const Userpage = () => {
  const [User, setUser] = useState([]);

  const userHandler = async () => {
    const response = await fetch(UserDetails);
    const newdata = await response.json();
    setUser(newdata);
  };

  useEffect(() => {
    userHandler();
  }, []);

  return (
    <div className="flex justify-center items-center flex-col" >
      {User.map((item) => (
        <div key={item.id}>
          {item.title}
        </div>
      ))}
    </div>
  );
};

export default Userpage;
