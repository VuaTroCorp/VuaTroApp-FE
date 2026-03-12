export const decodeBase64 = (token) => {
  if (!token) {
    return null;
  }
  try {
    const base64 = token.split(".")[1];
    const decode = atob(base64);
    return JSON.parse(decode);
  } catch (error) {
    // console.log("Token không hợp lệ để giải mã");
    return null;
  }
};
<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
