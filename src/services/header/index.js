export const publicHeader = ({ method, payload, url }) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify(payload);

  var requestOptions = {
    method,
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  const res = fetch(
    `${process.env.REACT_APP_URL}/api/auth/${url}`,
    requestOptions
  );

  return res;
};
