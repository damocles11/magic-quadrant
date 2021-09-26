import React, {ChangeEvent, useState} from 'react';
import Chart from './Chart';
import TableBody from "./TableBody";

import {changeValue} from '../functions/chart_functions';
import {EDITOR_DATA_TYPE} from '../types';
import '../style/Chart.css';

function Container() {
  const [editorData, setEditorData] = useState<EDITOR_DATA_TYPE[]>([{ID:1, Ability:35, Label:"asd", Vision:12}]);

  return (
    <div className='Container'>
      <Chart/>
      <table className='EditorTable'>
        <TableBody data={editorData} setter={setEditorData}/>
      </table>
    </div>
  );
}

export default Container;
