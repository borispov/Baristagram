// used to make json POST requets .. not relevant with Axios.

export const RegisterRequest = (name, email, password) => {
  return {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ name, email, password })
  }
}