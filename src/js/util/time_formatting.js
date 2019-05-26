export const secondsToHHMMSS = (seconds) => {
  const tempDate = new Date(seconds * 1000);
  const hhMMSS = tempDate.toISOString().substring(11, 19);

  return hhMMSS;
};
