import http from "../http-common";

const getAll =() => {
    return http.get("/projects");
};
const create = (data) => {
    return http.post("/projects", data);
};

export default{
    getAll, 
    create,
};


