import { useEffect, useState } from 'react'
import './App.css'
import { CollectionReference, doc, getDoc } from "firebase/firestore";
import { db } from './config/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import { Login } from './pages/Login';
import { Home } from './components/Home';
import { Signup } from './pages/Signup';

function App() {

  const [users, setUsers] = useState();
  const [loading, setLoading] = useState();

  const ColRef = collection(db, "movies");
  getDocs(ColRef).then((el) => {
    el.docs.forEach((dat) => {
      console.log(dat.data(), "---");
    })
  })

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'user'));
        const userList = querySnapshot.docs.map(doc => doc.data());
        setUsers(userList);
        console.log("yyyy", users);
      } catch (error) {
        console.error("Error fetching users: ", error);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, [])
  return (
    <>
     
      <Login />
      <Home/>
      <Signup/>
    </>
  )
}

export default App
