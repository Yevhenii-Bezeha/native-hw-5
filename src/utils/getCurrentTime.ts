export const getCurrentDateTime = () => {
  const now = new Date();
  const options = {
    day: "2-digit",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };
  return now.toLocaleString("uk-UA", options).replace(",", " |");
};
