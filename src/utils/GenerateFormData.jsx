/**
 * 
 * @param {object data} initialObject 
 * @returns concatinated string
 */
export const generateUrlEncodedData = (initialObject) => {
  const formData = Object.keys(initialObject)
    .map((key) => {
      return `${key}=${encodeURIComponent(initialObject[key])}`;
    })
    .join("&");
  return formData;
};
