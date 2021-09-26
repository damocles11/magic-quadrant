import React, {useState, useEffect} from 'react';
import {CHART_COORDINATE_TYPE, DIV_COORDINATE_TYPE, EDITOR_DATA_TYPE, TABLE_BODY_TYPE} from "../types";
import {changeCoordinates} from "../functions/chart_functions";


function Chart(props: TABLE_BODY_TYPE) {
  const [mouseCoordinates, setMouseCoordinates] = useState<CHART_COORDINATE_TYPE>({x:0,y:0})
  const [useCoordinates, setUseCoordinates] = useState<DIV_COORDINATE_TYPE>(0)
  const [divCoordinates, setDivCoordinates] = useState<HTMLElement | null>(document.getElementById('Chart'))

  useEffect(()=> {
      divCoordinates === null ? setDivCoordinates(document.getElementById('Chart')) :
          setUseCoordinates((divCoordinates.getBoundingClientRect().top-divCoordinates.getBoundingClientRect().bottom))
  }, [divCoordinates])

  return (
    <div id='Chart' className='Chart' onMouseMove={(movement: React.MouseEvent<HTMLDivElement>) => changeCoordinates(movement, setMouseCoordinates)}>
        <div style={{transform:"rotate(270deg)", position:"absolute", bottom:"15%", left:"-20%"}}>Ability to execute<span>&#8594;</span></div>
        <div style={{position:"absolute", bottom:"-5%", left:"0%"}}>Completeness of vision<span>&#8594;</span></div>

        <div style={{border: "2px solid lightgrey", position:"absolute", bottom: "50%", width:"99%"}}/>
        <div style={{border: "2px solid lightgrey", position:"absolute", bottom: "50%", width:"99%", transform:"rotate(90deg)"}}/>
        {props.data.map((data:EDITOR_DATA_TYPE) => {
            return(<span key={data.ID} id="dot" className="dot" style={{bottom: ((-(useCoordinates/100))*(data.Vision))*0.95,
                    right: ((-(useCoordinates/100))*(100-data.Ability))*0.95}}>
                    <label htmlFor="dot" className="DotLabel">{data.Label}</label></span>
            )
        })}
    </div>
  );
}

export default Chart;
