export const serverUrl = "http://158.160.135.237:8080";
export const frontUrl = "http://localhost:5173";

export const transformDate = (stringDate: string) => {
  const date = new Date(stringDate);
  const day = `${date.getDate() < 10 ? '0': ''}${date.getDate()}`
  const months = `${date.getMonth() < 10 ? '0': ''}${date.getMonth() + 1}`
  const year = `${date.getFullYear()}`
  return `${day}.${months}.${year}`;
}