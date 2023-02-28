import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import '../details.css'
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
    navigate("/shoesPage")
  }
  const handleDelete =async ()=>{
    await axios.delete(`https://63f763fb833c7c9c6082f429.mockapi.io/shoesForSale/${id}`)
    navigate("/shoesPage")
  }
  return (
    <>
      <h1 className='des-name'>{shoe.name}</h1>
    <div className='details'>
      <img className='des-img'
        src={shoe.img}
        alt={shoe.name}
      />
      <div className='des-details' style={{ padding: '10px' }}>
        <p>{shoe.price}</p>
        <p>{shoe.description}</p>
       
      </div>
       {showEditInputs ? (<>
        <input className='inp' type='text' value={shoe.name} onChange={(e)=>setShoe({...shoe, name: e.target.value})}/>
        <input className='inp' type='number' value={shoe.price} onChange={(e)=>setShoe({...shoe, price: e.target.value})}/>
        <input className='inp' type='text' value={shoe.img} onChange={(e)=>setShoe({...shoe, img: e.target.value})}/>
        <button className='con-btn' onClick={confirm}>confirm changes</button></>):(null)}
    </div>
    <div className='des-btns'>
      <button className='del-btn' onClick={handleDelete}>delete</button>
      <button className='edit-btn' onClick={handleEdit}>edit</button>
      </div>
      </>
  );
}

export default Shoe;
