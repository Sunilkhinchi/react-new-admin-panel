import React, { useState } from "react";
import "./Updates.css";
import { motion, AnimateSharedLayout } from "framer-motion";
import { UilTimes } from "@iconscout/react-unicons";

const Update = (props) => {
  const {id,data={}}=props ||{};
  const [expanded, setExpanded] = useState(true);
  const [selected, setSelected] = useState(0);
  const selectedValue = (id) => {
    setSelected(id)
  }
props.data?.map()
  return (
    <AnimateSharedLayout>
      {/* {selected} */}
      {expanded ? (
        <CompactUpdate
          param={props}
          setExpanded={() => setExpanded(false)}
          // setSelected={(id) => selectedValue(id)}
          selectedValue={selectedValue}
          id={id}
        />
      ) : (
        <ExpandedUpdate param={props} setExpanded={() => setExpanded(true)} />
      )}
    </AnimateSharedLayout>
  );
};

// function CompactUpdate

function CompactUpdate({ setExpanded, param,selectedValue }) {
  const id = param.id
  return (
    <motion.div
      className="update"
      onClick={(e)=>{setExpanded(); selectedValue(param.id); e.stopPropagation(e);}}
      layoutId="expandableCard"
    >
    
      <img src={param.img} alt="images" />
      <div className="noti">
        <div style={{ marginBottom: "0.5rem" }}>
          {/* <span> {param.id}</span> */}
          <span> {param.name}</span>
          <span> {param.noti}</span>
        </div>
        <span>{param.time}</span>
      </div>

      <div
        style={{ alignSelf: "flex-start", cursor: "pointer", color: "#000" }}
      >
        <UilTimes
          onClick={(e) => {param.deleteItem(id);  e.stopPropagation(e);}}
        />
      </div>
    </motion.div>
  );
}

// function ExpandedCard

function ExpandedUpdate({ setExpanded, param }) {
  const id = param.id
  return (
    <motion.div className="Update-single" layoutId="expandableCard" >
      <div style={{ alignSelf: "flex-end", cursor: "pointer", color: "#000" }}>
        <UilTimes
          className="crossicon"
          onClick={(e) => {param.deleteItem(id); setExpanded();}}
        />
      </div>
      <img src={param.img} alt="images" />

      <div className="UpdateContainer">
        <b>
          <span>{param.name}</span>{" "}
        </b>
      </div>
      <div className="UpdateDescription">
        <span> {param.noti}</span>
      </div>
    </motion.div>
  );
}

export default Update;
