import React, { useState } from "react";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Header from "./components/Header";
import Footer from "./components/Footer";
import CardComponent from "./components/CardComponent";


function App() {
  const [title, setTitle] = useState("Adopta un perrito");
  const [cardData, setCardData] = useState([
    {
      title: "Bartolo",
      text: "Lleno de energía y listo para jugar.¡Dale a Bartolo todo el amor que se merece!",
      buttonText: "Mas Información",
      image:"https://cdn.pixabay.com/photo/2020/01/08/11/52/boxer-4749898_640.jpg",
      buttonColor:"success",
      
    },
    {
      title: "Messi",
      text: "Es juguetón, amigable y se lleva bien con los niños. Haz de Messi parte de tu familia hoy mismo!",
      buttonText: "Mas Información",
      image: "https://cdn.pixabay.com/photo/2018/01/03/13/54/golden-retiver-3058383_640.jpg",
      buttonColor:"primary",
    },
    {
      title: "Gohan",
      text: "De tamaño mediano pero de corazón gigante. Hazte amigo de Gohan y experimenta el amor total.",
      buttonText: "Mas Información",
      image: "https://cdn.pixabay.com/photo/2019/12/24/13/20/dogs-4716740_640.jpg",
      buttonColor:"danger",
      
    },
    {
      title: "Princesa",
      text: "Es una compañera leal y cariñosa que adora los mimos y los abrazos. Princesa te espera",
      buttonText: "Mas Información",
      image: "https://cdn.pixabay.com/photo/2019/02/25/10/35/dog-4019291_640.jpg",
      buttonColor:"warning",
    },
  ]);
  
return (
    <>
      
      <div>
      <Header title="ADOPTA UN PERRITO" />
    </div>

      <div className="App">
      <Row xs={1} md={4} className="g-4">
        {cardData.map((card, idx) => (
          <Col key={idx}>
             <CardComponent title={card.title} text={card.text} buttonText={card.buttonText} buttonColor={card.buttonColor} image={card.image} />
          </Col>
        ))}
      </Row>
    </div>

    <div className="App">
      <Footer />
    </div>
     
     
     
    </>
  );
};

export default App;
