import React, { useEffect, useState } from "react";
import UI from "../../assets/UI.png";
import "./Navbar.css";
// import istockphoto from "../../assets/istockphoto.png";
import axios from "axios";

const Navbar = () => {
  const [cards, setCards] = useState([]);
  const [query, setQuery] = useState("");  // State for search query




  const fetchCards = async () => {
    try {
      const response = await axios.get('http://localhost:5000/cards');
      setCards(response.data);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(()=>{
    fetchCards();
    // console.log(cards)
  },[])



  // Filter cards based on the search query
  const filteredCards = cards.filter(card => 
    card.title.toLowerCase().includes(query.toLowerCase()) || 
    card.description.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
    <div className="navbar">
      <div className="my-nav">
        <div className="nav-left">
          <img src={UI} alt="" />
          <p>
            <b>Abstract</b> | Help Center
          </p>
        </div>

        <div className="nav-right">
          <p>Submit a request</p>
        </div>
      </div>

  <div className="header">
    <h1>How can we help?</h1>
    <input type="text" name="query" placeholder="Search                                                                                                                                                                →" 
    value={query} onChange={(e) => setQuery(e.target.value)} />
  </div>

             

    </div>
{/* <div className="blocks">
  <div className="block-blocks">
    <b>Branches</b>
    <p>   Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus, doloremque. </p>
  </div>
  <div className="block-blocks">
    <b>Branches</b>
    <p>   Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus, doloremque. </p>
  </div>
  <div className="block-blocks">
    <b>Branches</b>
    <p>   Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus, doloremque. </p>
  </div>
  <div className="block-blocks">
    <b>Branches</b>
    <p>   Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus, doloremque. </p>
  </div>
  <div className="block-blocks">
    <b>Branches</b>
    <p>   Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus, doloremque. </p>
  </div>
  <div className="block-blocks">
    <b>Branches</b>
    <p>   Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus, doloremque. </p>
  </div>
</div> */}
{filteredCards.slice(0,3).map((item,index)=>{
  return(

<div key={index} className="blocks">
  <div className="block-blocks">
    <b>{item.title}</b>
    <p> {item.description}</p>
  </div>
  <div className="block-blocks">
    <b>{item.title}</b>
    <p> {item.description}</p>
  </div>
  </div>
  )
})}
    
    </>
    


  );
};

export default Navbar;
