import React, {useEffect, useState} from 'react';
import Chart from './Chart';
import TableBody from "./TableBody";

import {EDITOR_DATA_TYPE} from '../types';
import '../style/Chart.css';
import {addRow} from "../functions/chart_functions";

function Container() {
  const [editorData, setEditorData] = useState<EDITOR_DATA_TYPE[]>([{ID:1, Ability:35, Label:"Default", Vision:12}]);

    useEffect(()=> {
        setEditorData(JSON.parse(String(localStorage.getItem('chartData'))))
    }, [])

  return (
    <div className='Container'>
        <Chart data={editorData} setter={setEditorData}/>
        <table className='EditorTable'>
            <tbody>
                <tr className="AdditionButtonContainer">
                    <td>
                        <button className='AdditionButton' onClick={() => addRow(editorData, setEditorData)}>Add</button>
                    </td>
                </tr>
                <tr className="EditorTableKeys">
                    <td>Label</td>
                    <td>Vision</td>
                    <td>Ability</td>
                    <td>Delete</td>
                </tr>
            </tbody>
            <TableBody data={editorData} setter={setEditorData}/>
        </table>
    </div>
  );
}

export default Container;
