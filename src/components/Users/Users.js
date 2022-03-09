import { useState, useEffect } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [errorFlag, setErrorFlag] = useState(false);

  async function fetchUsers() {
    try {
      const resp = await fetch("https://jsonplaceholder.typicode.com/users");
      if (!resp.ok) throw new Error("Error");
      const data = await resp.json();
      setUsers(data);
      setErrorFlag(false);
    } catch (error) {
      setErrorFlag(true);
      console.log(error);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  if (errorFlag) return <h2>Error retrieving users</h2>;
  return (
    <>
      <h2>Users</h2>
      <ul>
        {users.map((user) => {
          return (
            <li key={user.id}>
              {user.username}, {user.email}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Users;
