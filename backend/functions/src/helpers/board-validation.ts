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
const repeatedElements = (repeatedArray: any[], value: number) => {
  return;
};
