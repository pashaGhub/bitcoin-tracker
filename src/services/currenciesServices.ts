export const getCurrencies = async () => {
  try {
    const response = await fetch(
      "https://api.coindesk.com/v1/bpi/currentprice.json",
      {
        method: "GET",
      }
    );

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const data = await response.json();
    return { ...data, error: false };
  } catch (e) {
    return { error: true, message: e };
  }
};
