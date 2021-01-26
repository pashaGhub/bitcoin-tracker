export const getCurrencies = async () => {
  try {
    const response = await fetch(
      "https://api.coindesk.com/v1/bpi/currentprice.json",
      {
        method: "GET",
      }
    );

    if (!response.ok) {
      return {
        error: true,
        status: response.status,
        message: response.statusText,
      };
    }

    const data = await response.json();
    return data;
  } catch (e) {
    return { error: true, message: e };
  }
};
