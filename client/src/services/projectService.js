import http from "../http-common";



const get = (id) => {
    return http.get(`/projects/${id}`);
};
const getAll =() => {
    return http.get("/projects");
};
const create = (data) => {
    return http.post("/projects", data);
};
const remove = (id) => {
    return http.delete(`/projects/${id}`);
};

export default{
    getAll, 
    create,
    remove,
    get,
};


