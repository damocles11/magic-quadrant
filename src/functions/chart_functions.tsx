import React from 'react';
import {EDITOR_DATA_TYPE} from "../types";

export const changeValue = (row:EDITOR_DATA_TYPE, state:EDITOR_DATA_TYPE[], setState: React.Dispatch<React.SetStateAction<EDITOR_DATA_TYPE[]>>) => {
    setState(state.map((el:EDITOR_DATA_TYPE) => (el.ID === row.ID ? row : el)))
    return true
}

export const addRow = (state:EDITOR_DATA_TYPE[], setState: React.Dispatch<React.SetStateAction<EDITOR_DATA_TYPE[]>>) => {
    setState([...state, {ID:state.slice(-1)[0].ID+1, Ability:0, Label:"", Vision:0}])
    return true
}

export const deleteRow = (row:EDITOR_DATA_TYPE, state:EDITOR_DATA_TYPE[], setState: React.Dispatch<React.SetStateAction<EDITOR_DATA_TYPE[]>>) => {
    setState(state.filter(function(item:EDITOR_DATA_TYPE) {return item !== row}))
    return true
}