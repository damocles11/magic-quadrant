import React, {useState, useEffect} from 'react';
import {CHART_COORDINATE_TYPE, DIV_COORDINATE_TYPE, EDITOR_DATA_TYPE, TABLE_BODY_TYPE} from "../types";
import {changeCoordinates} from "../functions/chart_functions";


function Chart(props: TABLE_BODY_TYPE) {
  const [coordinates, setCoordinates] = useState<CHART_COORDINATE_TYPE>({x:0,y:0})
  const [useCoordinates, setUseCoordinates] = useState<DIV_COORDINATE_TYPE>(0)
  const [divCoordinates, setDivCoordinates] = useState<HTMLElement | null>(document.getElementById('Chart'))

  useEffect(()=> {
      divCoordinates === null ? setDivCoordinates(document.getElementById('Chart')) :
          setUseCoordinates((divCoordinates.getBoundingClientRect().top-divCoordinates.getBoundingClientRect().bottom))
  }, [divCoordinates])

  return (
    <div id='Chart' className='Chart' onMouseMove={(movement: React.MouseEvent<HTMLDivElement>) => changeCoordinates(movement, setCoordinates)}>
        {props.data.map((data:EDITOR_DATA_TYPE) => {
            return(<span key={data.ID} id="dot" className="dot" style={{bottom: ((useCoordinates*0.95)*(100-data.Ability))/100,
                    right: (useCoordinates*0.96)-((useCoordinates*(100-data.Vision))/100)}}>
                    <label htmlFor="dot" style={{bottom:-15,position:"relative"}}>{data.Label}</label></span>
            )
        })}
    </div>
  );
}

export default Chart;
