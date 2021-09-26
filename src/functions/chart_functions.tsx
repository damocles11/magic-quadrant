import React from 'react';
import {CHART_COORDINATE_TYPE, EDITOR_DATA_TYPE} from "../types";

export const changeValue = (row:EDITOR_DATA_TYPE, state:EDITOR_DATA_TYPE[], setState: React.Dispatch<React.SetStateAction<EDITOR_DATA_TYPE[]>>) => {
    if(row.Ability > 100 || row.Ability < 0 || row.Vision > 100 || row.Ability < 0) return false
    const new_state = state.map((el:EDITOR_DATA_TYPE) => (el.ID === row.ID ? row : el))
    localStorage.setItem('chartData', JSON.stringify(new_state))
    setState(new_state)
    return true
}

export const addRow = (state:EDITOR_DATA_TYPE[], setState: React.Dispatch<React.SetStateAction<EDITOR_DATA_TYPE[]>>) => {
    const new_state = [...state, {ID:state.slice(-1)[0].ID+1, Ability:0, Label:"Default", Vision:0}]
    localStorage.setItem('chartData', JSON.stringify(new_state))
    setState(new_state)
    return true
}

export const deleteRow = (row:EDITOR_DATA_TYPE, state:EDITOR_DATA_TYPE[], setState: React.Dispatch<React.SetStateAction<EDITOR_DATA_TYPE[]>>) => {
    const new_state = state.filter(function(item:EDITOR_DATA_TYPE) {return item !== row})
    localStorage.setItem('chartData', JSON.stringify(new_state))
    setState(new_state)
    return true
}

export const changeCoordinates = (movement: React.MouseEvent<HTMLDivElement>, setter: React.Dispatch<React.SetStateAction<CHART_COORDINATE_TYPE>>) => {
    setter({x:movement.pageX, y:movement.pageY})
    return true
}
