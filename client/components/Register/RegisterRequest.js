// used to make json POST requets .. not relevant with Axios.

export const RegisterRequest = (name, email, password, avatar) => {
  return {
    method: "POST",
    headers: {
      // "Content-Type": "application/json"
      "Content-Type": undefined
    },
    body: JSON.stringify({ name, email, password, avatar })
  }
}