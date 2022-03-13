import React, { useState } from 'react';

function ListItem(props) {
    return (
        <div className='list-item row jc-space-between'>
            <span>{props.itemData.description}</span>
            <button className='delbut' onClick={() => props.deleteTask(props.index)} >X</button>
        </div>
    )
}

export default ListItem;