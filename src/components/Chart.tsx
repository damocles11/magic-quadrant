import React, {useState, useEffect} from 'react';
import {DIV_COORDINATE_TYPE, EDITOR_DATA_TYPE, TABLE_BODY_TYPE} from "../types";

import {changeValue} from "../functions/chart_functions";
import Labels from './Labels'

function Chart(props: TABLE_BODY_TYPE) {
  const [useCoordinates, setUseCoordinates] = useState<DIV_COORDINATE_TYPE>(0);
  const [divCoordinates, setDivCoordinates] = useState<HTMLElement | null>(document.getElementById('Chart'));

  useEffect(()=> {
      divCoordinates === null ? setDivCoordinates(document.getElementById('Chart')) :
          setUseCoordinates((divCoordinates.getBoundingClientRect().top-divCoordinates.getBoundingClientRect().bottom));
  }, [divCoordinates])

  const handleDragEnter = (e: React.DragEvent<HTMLSpanElement>, data: EDITOR_DATA_TYPE) => {
      e.preventDefault();
      e.stopPropagation();
      const vision:number = Math.floor(100-((e.pageY - Number(divCoordinates?.getBoundingClientRect()?.top)) * 100 / 400));
      const ability:number = Math.floor(((e.pageX - Number(divCoordinates?.getBoundingClientRect()?.left)) * 100 / 400));
      if(data) changeValue({...data, Ability: ability, Vision: vision}, props.data, props.setter)
  };

  const handleDragOver = (e: React.DragEvent<HTMLSpanElement>) => {
      e.preventDefault();
      e.stopPropagation();
  };


  return (
    <div id='Chart' className='Chart' onDragOver={e => handleDragOver(e)}
         onDragLeave={e => handleDragOver(e)}>
        <Labels/>
        {props?.data?.map((data:EDITOR_DATA_TYPE) => {
            const [bottom,right] = [((-(useCoordinates/100))*(data.Vision))*0.95, ((-(useCoordinates/100))*(100-data.Ability))*0.95]

            return(
                <span key={data.ID} id={String(data.ID)} className="dot" style={{bottom: bottom, right: right, opacity: data.checked ?  1 : 0.3}}
                         draggable={true} onDrag={e => {handleDragEnter(e,data)}}>
                    <div style={{border: "1px dashed red", position:"absolute", width:right, transform:"rotate(deg)", left:15, top: 5}}/>
                    <div style={{border: "1px dashed red", position:"absolute", width:Number(bottom), transform:"rotate(90deg)", transformOrigin: "top left", left:15, top: 5}}/>
                    <label htmlFor={String(data.ID)} className="DotLabel">{data.Label}</label></span>
            )
        })}
    </div>
  );
}

export default Chart;
