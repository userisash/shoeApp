import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function Shoe() {
  const {id} = useParams();
  const [shoe, setShoe] = useState('');
  const [showEditInputs, setShowEditInputs] = useState(false)
  const navigate = useNavigate()
  useEffect(()=>{
    console.log(id)
  },[id])
 
  useEffect(() => {
  const fetch = async  ()=>{
  const res =  await axios.get(`https://63f763fb833c7c9c6082f429.mockapi.io/shoesForSale/${id}`)
    setShoe(res.data)
  }
  fetch()
  }, [id]);
  if (!shoe) {
    return <div>Loading...</div>;
  }

  const handleEdit = ()=>{
    setShowEditInputs(!showEditInputs)
  }
  const confirm = async()=>{
    await axios.put(`https://63f763fb833c7c9c6082f429.mockapi.io/shoesForSale/${id}`, 
    shoe
    )
  }
  const handleDelete =async ()=>{
    await axios.delete(`https://63f763fb833c7c9c6082f429.mockapi.io/shoesForSale/${id}`)
    navigate("/ShoesPage")
  }
  return (
    <div>
      <h1>{shoe.name}</h1>
      <img
        src={shoe.img}
        alt={shoe.name}
        style={{ width: '100%', height: '400px', objectFit: 'cover' }}
      />
      <div style={{ padding: '10px' }}>
        <p>{shoe.price}</p>
        <p>{shoe.description}</p>
       
      </div>
      <button onClick={handleDelete}>delete</button>
      <button onClick={handleEdit}>edit</button>
       {showEditInputs ? (<>
        <input type='text' value={shoe.name} onChange={(e)=>setShoe({...shoe, name: e.target.value})}/>
        <input type='number' value={shoe.price} onChange={(e)=>setShoe({...shoe, price: e.target.value})}/>
        <input type='text' value={shoe.img} onChange={(e)=>setShoe({...shoe, img: e.target.value})}/>
        <button onClick={confirm}>confirm changes</button></>):(null)}
    </div>
  );
}

export default Shoe;
