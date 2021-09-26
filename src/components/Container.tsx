import React, {ChangeEvent, useState} from 'react';
import Chart from './Chart';

import {changeValue} from '../functions/chart_functions';
import {EDITOR_DATA_TYPE} from '../types';
import '../style/Chart.css';

function Container() {
  const [editorData, setEditorData] = useState<EDITOR_DATA_TYPE[]>([{ID:1, Ability:35, Label:"asd", Vision:12}]);

  return (
    <div className='Container'>
      <Chart/>
      <table className='EditorTable'>
        <tbody>
            {editorData.map((row:EDITOR_DATA_TYPE) => {
                return(
                <tr key={row.ID}>
                    <td><input type='text' value={row.Label} onChange={(change:ChangeEvent<HTMLInputElement>) => changeValue('label', row, change)}/></td>
                    <td>{row.Ability}</td>
                    <td>{row.Vision}</td>
                </tr>)
            })}
        </tbody>
      </table>
    </div>
  );
}

export default Container;
