import React, { useState } from 'react' 

export const MenuList = ({children , title , class_name}) => {
  const [show_nav , set_show_nav] =useState(false)
  return (
    <div onClick={() =>{set_show_nav(state=>!state)}} className={class_name}>
      {
        title != "Menu" && 
        <span style={{ background:title =="L" ? "#114487" :title=="M" ?"#f6d55d" : "#e43d4b"}} className="priorety__circle"> </span>
      }

      {
        title == "Menu"?
        <nav>
          {title}
        </nav> :
        title 
      }

      {
        show_nav && children
      }
    </div>
  )
}
