import React, { useState } from "react";
import Update from "./Update";
import "./Updates.css";
import { UpdatesData } from "../../Data/Data";

const Updates = () => {
  const[items,setItems]=useState(UpdatesData)

  console.log(items)
 

  const deleteItem = (id) => {
    const newItems = items.filter((item) => item.id !== id)
    setItems(newItems)
    // alert(id)
  }

  return (
    <div className="Updates">
      {items.map((update, index) => {
        return (
          <Update
            key={index}
            id={update.id}
            img={update.img}
            name={update.name}
            noti={update.noti}
            time={update.time}
            deleteItem={deleteItem}

          />
        );
      })}
    </div>
  );
};

export default Updates;
