import axios from "axios";

let api = axios.create({
  headers: {
    "Client-ID": "lnx38g0ye9fkz13kcwemqrd4o4fmq5",
  },
});
// const myHeaders = new Headers();
// myHeaders.append("Client-ID", "lnx38g0ye9fkz13kcwemqrd4o4fmq5");
export default api;
