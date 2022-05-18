const token = {
  method: "get",
  headers: {
    "authorization": `bearer ${localStorage.getItem("token")}`,
  },
  
};

export default token
