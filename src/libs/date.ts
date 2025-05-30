export const getTodaysDateAndTime = () => {
  const date = new Date();

  return {
    iso: date.toISOString(),
    date: date.toLocaleDateString(),
    time: date.toLocaleTimeString(),
    timestamp: date.getTime(),
  };
};
