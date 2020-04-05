export const limits = (value: string) => {
  const render: Record<string, Record<string, number>> = {
    B: { min: 1, max: 15 },
    I: { min: 16, max: 30 },
    N: { min: 31, max: 45 },
    G: { min: 46, max: 60 },
    O: { min: 61, max: 71 },
  };

  return render[value] || {};
};
