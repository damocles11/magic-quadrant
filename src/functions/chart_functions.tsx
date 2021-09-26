import {ChangeEvent} from "react";
import {EDITOR_DATA_TYPE} from "../types";

export const changeValue = (label:string, row:EDITOR_DATA_TYPE, change:ChangeEvent<HTMLInputElement>) => {
    console.log(change.target.value)
    return 123
}
