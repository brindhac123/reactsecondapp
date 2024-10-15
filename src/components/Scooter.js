import { useState } from "react";


function Scooter(){
    //let color = 'Blue';
    const [color,setColor]=useState('Red')
    const [brand,setBrand]=useState('Honda')
    const [model,setModel]=useState('Activa 89')
    const [year,setYear]=useState('2020')
    const [scooter,setScooter]=useState(
        {
            color:"Red",
            brand:"Honda",
            model:"Activa",
            year:"2020"

        }
    );
    function updateColor(){
        setScooter(previousState=>{
            return{...previousState,color:"Blue"}
        })
    } 
    console.log("test",scooter)

    return <>
    <h1>My Scooter</h1>
    <p> Color : {color}</p>
    <p> Color : {brand}</p>
    <p> Color : {model}</p>
    <p> Color : {year}</p>
    <p> Color : {scooter.color}</p>
    <p> Color : {scooter.brand}</p>
    <p> Color : {scooter.model}</p>
    <p> Color : {scooter.year}</p>
    {<button onClick={updateColor}>change color</button>}
    </>
}

export default Scooter; 