import React from "react";

export type EDITOR_DATA_TYPE = {
    ID: number,
    Label: string,
    Vision: number,
    Ability: number,
}

export type TABLE_BODY_TYPE = {
    data:EDITOR_DATA_TYPE[],
    setter:React.Dispatch<React.SetStateAction<EDITOR_DATA_TYPE[]>>
}
