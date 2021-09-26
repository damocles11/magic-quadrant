import React from 'react';
import {EDITOR_DATA_TYPE} from "../types";

export const changeValue = (row:EDITOR_DATA_TYPE, state:EDITOR_DATA_TYPE[], setState: React.Dispatch<React.SetStateAction<EDITOR_DATA_TYPE[]>>) => {
    try{setState(state.map((el:EDITOR_DATA_TYPE) => (el.ID === row.ID ? row : el)))}
    catch (error) {return false}
    return true
}
