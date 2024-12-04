import React ,{useEffect,useState} from 'react'
import {Link} from "react-router-dom";
import { useAuthContext } from '../hooks/useAuthContext';
import axios from "axios";
import Table from './Table';

const MainMenu = () => {
    const {user}=useAuthContext()
    const [users, setUsers] = useState([]);
    const [error, setError] = useState("");

useEffect(() => {
  const fetchUsers = async () => {
    try {
      const response = await axios.get(import.meta.env.BACKEND_BASE_URL+"/api/users/clientlist", {
        headers: {
          Authorization: 'Bearer '+user.user,
        },
      }); // API backend
      setUsers(response.data); // Stocker les utilisateurs
      setError("")
    } catch (err) {
      setError("erreur de chargement !!!!!!!!");
    }
  };

  fetchUsers();
}, [user]);
  return (
    <div className='flex flex-col justify-center items-center gap-5  '>
        <div className='flex justify-between gap-10'>
          <h1 className='text-slate-950 text-4xl font-bold  '>Mala T5azwi9a ya Ze5iiiiii !!!!!!!</h1>
          <Link to="/" className='border-2  border-orange-600 p-3  rounded-md cursor-pointer hover:bg-orange-600 hover:text-white'>Home Page</Link>
        </div>
        <div className='flex justify-center items-center gap-5 '>
          {error && <p className="text-red-500 text-center">{error}</p>}
          {user &&<Table users={users}/>}
        </div>
    </div>
  )
}

export default MainMenu