import React, { useState, useEffect } from 'react'
import '../styles/styles.css'

export default function RandomColour() {

    const [typeOfColour, setTypeOfColour] = useState('hex')
    const [colour, setColour] = useState('#000000')

    function randomColourUtility(length){
        return Math.floor(Math.random()*length)
    }
    

    function handleHEXColour(){
        const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
        let hexColour = '#';

        for (let i = 0; i < 6; i++) {
            hexColour += hex[randomColourUtility(hex.length)]
        }
        setColour(hexColour)
    }
    
    function handleRGBColour(){
        const R = randomColourUtility(256)
        const G = randomColourUtility(256)
        const B = randomColourUtility(256)

        setColour(`rgb(${R}, ${G}, ${B})`);
    }

    useEffect(() => {
      if (typeOfColour === 'rgb') handleRGBColour();
      else handleHEXColour();
    }, [typeOfColour])
    

    return (
        <div className='wrapper RandomColour' style={{background: colour}}>
            <div className='buttonBox'>
                <button onClick={() => setTypeOfColour('hex')}>Show HEX</button>
                <button onClick={() => setTypeOfColour('rgb')}>Show RGB</button>
                <button onClick={
                    typeOfColour === 'hex'
                    ? handleHEXColour 
                    : handleRGBColour
                }>Generate Colour
                </button>
            </div>
            <div className='content'>
                <h3>{typeOfColour === 'rgb'
                    ? 'RGB Colour'
                    : 'HEX Color'
                }</h3>
                <h1>{colour}</h1>
            </div>
        </div>
    )
}
