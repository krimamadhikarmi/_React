import { useEffect, useState } from 'react';
import '../styles/user.css';
import Card from './userCard';

const Users = () => {
  const [allUsers, setAllUsers] = useState([]);
  useEffect(() => {
    fetch('http://jsonplaceholder.typicode.com/users').then(async (response) => {
      const users = await response.json();
      console.log(users);
      setAllUsers(() => allUsers);
    });
  }, []);
  return (
    <div id="users">
      <h1 id="title">All Users</h1>
      <div id="usergrid">
        {console.log('users', allUsers)}
        {allUsers.map((user) => {
          return <Card />;
        })}
      </div>
    </div>
  );
};
export default Users;
