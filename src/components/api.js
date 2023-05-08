export const getJokes = async (type, amount) => {
  const response = await fetch(`/jokes?type=${type}&amount=${amount}`, {
    method: "GET",
  });
  const data = await response.json();
  return data;
};
