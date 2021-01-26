export const getPageInfo = async (url: string) => {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.responseType = "document";
    xhr.onload = () => {
      resolve(xhr);
    };
    xhr.send();
  });
  return promise;
};
