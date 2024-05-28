import React, { useState } from 'react'
import data from './data'
import '../styles/styles.css'

// single selection
// multiple selection

export default function Accordion() {
    const [selected, setSelected] = useState(null)
    const [enableMutli, setEnableMutli] = useState(false)
    const [multiple, setMultiple] = useState([])
    
    function handleSingleSelection(getCurrentId){
        setSelected(getCurrentId === selected ? null : getCurrentId)
    }

    function handleMultiSelection(getCurrentId){
        let copyMulti = [...multiple]
        const findIndexOfCurrentId = copyMulti.indexOf(getCurrentId)

        console.log(findIndexOfCurrentId)

        if(findIndexOfCurrentId === -1){
            copyMulti.push(getCurrentId)
        }else{
            copyMulti.splice(findIndexOfCurrentId, 1)
        }
        setMultiple(copyMulti)
    }

    console.log(selected, multiple)
    return (
        <div className='wrapper Accordion'>
            <button onClick={() => setEnableMutli(!enableMutli)}>
                Enable Multiselection
            </button>
            <div className='accordion'>
                {
                data && data.length > 0 ? (
                    data.map(dataItem=> (
                        <div className='item' key={dataItem.id}>
                            <div  className='title' onClick={
                                enableMutli 
                                ? () => handleMultiSelection(dataItem.id) 
                                : () => handleSingleSelection(dataItem.id)
                                }>
                                <h3>{dataItem.question}</h3>
                                <span>+</span>
                            </div>
                            {enableMutli
                                ? multiple.indexOf(dataItem.id) !== -1 && (
                                    <div className='answer'>{dataItem.answer}</div>
                                 )
                                : selected === dataItem.id && (
                                <div className='answer'>{dataItem.answer}</div>
                                )

                            }
                            {/* { selected === dataItem.id || multiple.indexOf(dataItem.id) !== -1 ? (
                                <div className='answer'>{dataItem.answer}</div>
                            ) : null} */}
                        </div>   
                    ))
                ) : <div>No data found!</div>
                }

            </div>
        </div>
  )
}
