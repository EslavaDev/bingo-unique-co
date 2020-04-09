export const horizontalWin = (board: any, fila: number) => {
  let counter = 0;
  for (let col = 0; col < 5; col++) {
    const r = board[col].values[fila].active;

    if (r == true || r == null) {
      counter++;
    }
    if (counter == 5) {
      return true;
    }
    return false;
  }
};

export const verticalWin = (board: any[], row: number) => {};

export const leftDiagonalWin = (board: any) => {
  let counter = 0;
  for (let pos = 4; pos >= 0; pos--) {
    const r = board[pos].values[pos].active;

    if (r == true || r == null) {
      counter++;
    }
  }

  if (counter == 5) {
    return true;
  }
  return false;
};
export const rightDiagonalWin = (board: any[], row: number, key: number) => {};
export const fullTableWin = (board: any[], fila: number) => {};

const tabla = {
  data: [
    {
      label: "B",
      values: [
        {
          number: 5,
          active: false,
        },
        {
          number: 14,
          active: false,
        },
        {
          number: 15,
          active: false,
        },
        {
          number: 12,
          active: false,
        },
        {
          number: 4,
          active: false,
        },
      ],
    },
    {
      label: "I",
      values: [
        {
          number: 26,
          active: false,
        },
        {
          number: 21,
          active: false,
        },
        {
          number: 22,
          active: false,
        },
        {
          number: 27,
          active: false,
        },
        {
          number: 17,
          active: false,
        },
      ],
    },
    {
      label: "N",
      values: [
        {
          number: 33,
          active: false,
        },
        {
          number: 42,
          active: false,
        },
        {
          number: null,
          active: false,
        },
        {
          number: 37,
          active: false,
        },
        {
          number: 32,
          active: false,
        },
      ],
    },
    {
      label: "G",
      values: [
        {
          number: 58,
          active: false,
        },
        {
          number: 50,
          active: false,
        },
        {
          number: 53,
          active: false,
        },
        {
          number: 46,
          active: false,
        },
        {
          number: 60,
          active: false,
        },
      ],
    },
    {
      label: "O",
      values: [
        {
          number: 71,
          active: false,
        },
        {
          number: 68,
          active: false,
        },
        {
          number: 67,
          active: false,
        },
        {
          number: 70,
          active: false,
        },
        {
          number: 63,
          active: false,
        },
      ],
    },
  ],
};
