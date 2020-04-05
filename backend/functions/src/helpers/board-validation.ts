import { randomValueBoard } from "./functions-helpers";

//valida si el subarreglo de label N en su posicion 2 esta vacio
export const emptySpace = (column: any[], label: string) => {
  if (label != "N") {
    return column;
  }
  const newColumn = [...column];
  newColumn[2] = null;
  return newColumn;
};

//valida si los numeros no estan repetidos
export const repeatedElements: any = (
  repeatedArray: any[],
  value: number,
  label: string
) => {
  const validation = repeatedArray.some((element) => element === value);
  if (!validation) {
    return value;
  }
  const newValue = randomValueBoard(label);
  return repeatedElements(repeatedArray, newValue, label);
};
