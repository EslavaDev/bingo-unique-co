import { randomValueBoard, randomValueGame } from "./functions-helpers";

//valida si el subarreglo de label N en su posicion 2 esta vacio
export const emptySpace = (column: any[], label: string) => {
  if (label != "N") {
    return column;
  }
  console.log(label)
  const newColumn = [...column];
  newColumn[2].number = null;
  return newColumn;
};

//valida si los numeros no estan repetidos
export const repeatedElements: any = (
  repeatedArray: any[],
  value: number,
  label?: string,
  flag?: boolean,
) => {
  const validation = repeatedArray.some((element) => element === value);
  if (!validation) {
    return value;
  }
  if(flag && label){
    const newValue = randomValueBoard(label);
    return repeatedElements(repeatedArray, newValue, label, flag);
  }
  if(flag){
    const newValue = randomValueGame();
    return repeatedElements(repeatedArray, newValue, label, flag);
  }
  return undefined
};
