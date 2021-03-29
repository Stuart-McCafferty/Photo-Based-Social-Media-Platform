import { DOMAIN_NAME } from "./global-variables";

export function postMethodFetch(data, pathname, next, contentType=null) {
  fetch(DOMAIN_NAME + pathname, {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": contentType || "application/json",
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(response => next(response));
}
