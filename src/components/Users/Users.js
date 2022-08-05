import { useState, useEffect } from "react";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";

const Users = () => {
  //get users list
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const usersCollectionRef = collection(db, "users");
      const data = await getDocs(usersCollectionRef);
      // console.log(data);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, []);
  console.log(users);
  //end
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.name} - {user.type}
        </li>
      ))}
    </ul>
  );
};
export default Users;
