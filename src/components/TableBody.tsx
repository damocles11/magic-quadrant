import React, {ChangeEvent} from 'react';
import {EDITOR_DATA_TYPE, TABLE_BODY_TYPE} from "../types";
import {changeValue, deleteRow} from "../functions/chart_functions";

function Chart(props: TABLE_BODY_TYPE) {
  return (
      <tbody>
      {props?.data?.map((row:EDITOR_DATA_TYPE) => {
        return(
            <tr key={row.ID}>
              <td><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" checked={row.checked} onChange={() => changeValue({...row, checked: !row.checked}, props.data, props.setter)}/></td>
              <td><input type='text' value={row.Label} onChange={(change:ChangeEvent<HTMLInputElement>) => changeValue({...row, Label:String(change.target.value)}, props.data, props.setter)}/></td>
              <td><input type='number' max={100} min={0} value={row.Ability} onChange={(change:ChangeEvent<HTMLInputElement>) => changeValue({...row, Ability:Number(change.target.value)}, props.data, props.setter)}/></td>
              <td><input type='number' max={100} min={0} value={row.Vision} onChange={(change:ChangeEvent<HTMLInputElement>) => changeValue({...row, Vision:Number(change.target.value)}, props.data, props.setter)}/></td>
              <td><button className='AdditionButton' onClick={() => deleteRow(row, props.data, props.setter)}>Delete</button></td>
            </tr>)
      })}
      </tbody>
  );
}

export default Chart;
