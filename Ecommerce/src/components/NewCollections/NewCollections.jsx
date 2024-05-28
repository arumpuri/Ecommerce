import React from 'react'
import new_collection from '../../assets/new_collections'
import './NewCollections.css'
import Item from '../Item/Item'

export const NewCollections = () => {
  return (
    <div className='new-collections'>
        <h1>NEW COLLECTIONS</h1>
        <hr />
        <div className="collections">
            {new_collection.map((item, i) =>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}></Item>
            })}
        </div>
    </div>
  )
}

export default NewCollections