import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import ShoeDetailsPage from './Shoe';
import DeleteButton from './DeleteCard';
import CheckoutButton from './Checkoutnavi';


function ShoesPage() {
  const [shoes, setShoes] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    img: '',
  });
  const [formVisible, setFormVisible] = useState(false);
  const [selectedShoeId, setSelectedShoeId] = useState(null);
  const [updateFormVisible, setUpdateFormVisible] = useState(false);
  const [updatedData, setUpdatedData] = useState({
    name: '',
    price: '',
    img: '',
  });
  const navigate = useNavigate();
  
  useEffect(() => {
    axios
      .get('https://63f763fb833c7c9c6082f429.mockapi.io/shoesForSale')
      .then((response) => setShoes(response.data))
      .catch((error) => console.log(error));
  }, []);
 

  function handleShoeClick(shoe) {
    
    setSelectedShoeId(shoe.id);
    navigate(`/shoe/${shoe.id}`);
  }

  function handleUpdateSubmit(event) {
    event.preventDefault();
    const updatedShoes = shoes.map((shoe) => {
      if (shoe.id === selectedShoeId) {
        return {
          ...shoe,
          name: updatedData.name,
          price: updatedData.price,
          img: updatedData.img,
        };
      }
      return shoe;
    });
    setShoes(updatedShoes);
    setUpdateFormVisible(false);
    setUpdatedData({
      name: '',
      price: '',
      img: '',
    });
  }
  function handleUpdateCancel() {
    setUpdateFormVisible(false);
    setUpdatedData({
      name: '',
      price: '',
      img: '',
    });
  }
    

  function handleFormChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    const newShoe = {
      id: Math.floor(Math.random() * 100000),
      name: formData.name,
      price: formData.price,
      img: formData.img,
    };
    setShoes([...shoes, newShoe]);
    setFormData({
      name: '',
      price: '',
      img: '',
    });
    setFormVisible(false);
  }

  function handleFormCancel() {
    setFormData({
      name: '',
      price: '',
      img: '',
    });
    setFormVisible(false);
  }

  function handleDelete(shoeId) {
    const updatedShoes = shoes.filter((shoe) => shoe.id !== shoeId);
    setShoes(updatedShoes);
  }

  
  const selectedShoe = useMemo(() => {
    if (!selectedShoeId) return null;
    return shoes.find((shoe) => shoe.id === selectedShoeId);
  }, [selectedShoeId, shoes]);

  return (
    <div className='products-dis'>
      <div className='hed-btn'>
      <h1 className='title'>Choose From The Best</h1>
       <button className='add-btn' onClick={() => setFormVisible(true)}>Add Shoe</button>
       </div>
      {formVisible && (
        <form className='add' onSubmit={handleFormSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleFormChange}
            />
          </label>
          <br />
          <label>
            Price:
            <input
              type="text"
              name="price"
              value={formData.price}
              onChange={handleFormChange}
            />
          </label>
          <br />
          <label>
            Image URL:
            <input
              type="text"
              name="img"
              value={formData.img}
              onChange={handleFormChange}
            />
          </label>
          <br />
          <button type="submit">Add Shoe</button>
          <button type="button" onClick={handleFormCancel}>
            Cancel
          </button>
        </form>
      )}
      <div className='card-container'>
        {shoes.map((shoe) => (
          <div className='card'
            key={shoe.id}
            >
            <img className='img-display'
              src={shoe.img}
              alt={shoe.name}
              />
            <div style={{ padding: '10px' }}>
              <h2>{shoe.name}</h2>
              <p>{shoe.price}</p>
              <div className='btns'>
            <Link to={`/shoe/${shoe.id}`}>
            <button >Details</button></Link>
              <CheckoutButton/>
              </div>
          </div>
      </div>  
              ))}
          </div>
      </div>
    
    );
  }
  
  export default ShoesPage;