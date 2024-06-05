export function getVersion() {
  return process.env.VERSION ?? "0.0.0";
}

export const apiUrl = process.env.APIURL || "http://localhost:5000/scrape";

export const port = parseInt(process.env.PORT || "8080");
