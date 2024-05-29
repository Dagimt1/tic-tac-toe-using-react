import { useState } from 'react'
export default function Player ({initalName, symbol, isActive}) {
    const [ isEditing, setIsEditing ] = useState(false);
    const [ playerName, setPlayerName ] = useState(initalName)

    function handleChange (event) {
        setPlayerName(event.target.value)
    }

    function hangleEditClick () {
        setIsEditing((editing) => !editing)
    }
    let editablePlayerName = <span className="player-name">{playerName}</span>;


    if (isEditing) {
        editablePlayerName = <input onChange={handleChange} type = 'text' required value = {playerName} />
        
    }

    return (
        <li className={isActive ? 'active' : undefined }>
        <span className="player">
          {editablePlayerName}
          <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={hangleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
      </li>
    )

}