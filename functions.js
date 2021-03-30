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

export function getProfileContent(username, next) {
  fetch(`${DOMAIN_NAME}/api/user/${username}?username=${GLOBAL.USERNAME}`)
  .then(res => res.json())
  .then(data => {
    let profileData = data;
    fetch(`${DOMAIN_NAME}/api/activity/${username}`)
    .then(res => res.json())
    .then(data => {
      next(profileData, data.activity.reverse());
    });
  });
}
