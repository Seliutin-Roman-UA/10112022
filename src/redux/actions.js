export const decrement = payload => {
  return { type: '-', payload };
};
export const increment = payload => {
  return { type: '+', payload };
};

export const changePace = value => {
  return { type: 'pace', payload: value };
};
