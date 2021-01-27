export const proxyCORS = "https://cors-anywhere.herokuapp.com/";
export const getPageInfo = async (url: string) => {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", `${proxyCORS}${url}`);
    xhr.responseType = "document";
    xhr.onerror = () => {
      alert("Something went wrong...");
    };
    xhr.onload = () => {
      resolve(xhr);
    };
    xhr.send();
  });
  return promise;
};
