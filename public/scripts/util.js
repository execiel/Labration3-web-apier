function createOverlay(html) {
  overlay = document.createElement("div");
  overlay.id = "overlay";
  overlay.innerHTML = html;
  document.body.append(overlay);
}

async function postData(url = "", data = {}) {
  const response = await fetch(url, {
    method: "POST",
    // mode: "cors",
    // cache: "no-cache",
    // credentials: "same-origin",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    // redirect: "follow", // manual, *follow, error
    // referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data),
  });
  return response.json();
}
