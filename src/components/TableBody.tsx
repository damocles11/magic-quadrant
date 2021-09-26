import React, {ChangeEvent} from 'react';
import {EDITOR_DATA_TYPE, TABLE_BODY_TYPE} from "../types";
import {changeValue} from "../functions/chart_functions";

function Chart(props: TABLE_BODY_TYPE) {
  return (
      <tbody>
      {props.data.map((row:EDITOR_DATA_TYPE) => {
        return(
            <tr key={row.ID}>
              <td><input type='text' value={row.Label} onChange={(change:ChangeEvent<HTMLInputElement>) => changeValue({...row, Label:String(change.target.value)}, props.data, props.setter)}/></td>
              <td><input type='number' max={100} min={0} value={row.Ability} onChange={(change:ChangeEvent<HTMLInputElement>) => changeValue({...row, Ability:Number(change.target.value)}, props.data, props.setter)}/></td>
              <td><input type='number' max={100} min={0} value={row.Vision} onChange={(change:ChangeEvent<HTMLInputElement>) => changeValue({...row, Vision:Number(change.target.value)}, props.data, props.setter)}/></td>
            </tr>)
      })}
      </tbody>
  );
}

export default Chart;
