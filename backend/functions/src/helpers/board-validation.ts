import { randomValueBoard } from "./functions-helpers";

export const boardValidation = (array: any) => {
  let status;
  let msj;
  const temp = array.map((item: any) => {});

  return { booleano: true, msj: "" };
};

//valida si el subarreglo de label N en su posicion 2 esta vacio
const emptySquare = (array: any) => {
  let colN = array.find((element: any) => element.label == "N");

  if (colN.values[2] != null) {
  }
};

//valida si los numeros no estan repetidos
export const repeatedElements: any  = (repeatedArray: any[], value: number, label: string) => {
    const validation = repeatedArray.some((element) => element === value);
    if (!validation) {
        return value;
    }
    const newValue= randomValueBoard(label);
    return repeatedElements(repeatedArray, newValue, label);
};
