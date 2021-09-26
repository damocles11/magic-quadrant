import React, {useState} from 'react';
import {CHART_COORDINATE_TYPE, TABLE_BODY_TYPE} from "../types";
import {changeCoordinates} from "../functions/chart_functions";


function Chart(props: TABLE_BODY_TYPE) {
  const [coordinates, setCoordinates] = useState<CHART_COORDINATE_TYPE>({x:0,y:0})

  return (
    <div className='Chart' onMouseMove={(movement: React.MouseEvent<HTMLDivElement>) => changeCoordinates(movement, setCoordinates)}>
    </div>
  );
}

export default Chart;
