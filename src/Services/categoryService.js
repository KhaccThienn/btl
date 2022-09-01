import * as http from "~/http/http"

const urlAPi = "http://localhost:3110/color";

export const getAll = async () => {
  try {
    const res = await http.get(urlAPi);
    return res;
  }
  catch (err) { 
    console.error(err);
  }
}