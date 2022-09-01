import * as http from "~/http/http"
const urlApi = "http://localhost:3110/shopPages";
const urlColor = "http://localhost:3110/color";

export const getAll = async (page = 1) =>  {
  try {
    const res = await http.get(`${urlApi}?_page=${page}&_limit=6`);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const get = async () => {  
  try {
    const res = await http.get(`${urlApi}`);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const homepage = async () => { 
  try {
    const res = await http.get(`${urlApi}?_limit=6`)
    return res;
  }
  catch (error) { 
    console.error(error);
  }
}
export const getColor = async () => {
  try {
    const res = await http.get(urlColor)
    return res;
  } catch (error) {
    console.log(error)
  }
}

export const filterByKey = async (keyWord) => {
  try {
    const res = await http.get(`${urlApi}?name_like=${keyWord}&_limit=4`);
    return res;
  } catch (err) {
    alert(err);
  }
};

export const filterByName = async (key) => { 
  try {
    const res = await http.get(`${urlApi}?_sort=name&${key}`);
    return res;
  } catch (err) {
    alert(err);
  }
}

export const detailsProducts = async (id) => { 
  try {
      const res = await http.get(`${urlApi}/${id}`);
      return res;
  } catch (error) {
    console.log(error);
  }
}

export const filterByColor = async (filterKey) => {
  try {
    const res = await http.get(`${urlApi}?${filterKey}`);
    return res;
  } catch (err) {
    console.error(err);
  }
};
