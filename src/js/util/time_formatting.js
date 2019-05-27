export const secondsToHHMMSS = (seconds) => {
  const amtMilliseconds = seconds * 1000;
  const secondsAsDate = new Date(amtMilliseconds);
  const hhMMSSString = secondsAsDate.toISOString().substring(11, 19);

  return hhMMSSString;
};
