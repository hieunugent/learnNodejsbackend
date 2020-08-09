import http from "../http-common";

const create = (data)=> {
    return http.get(`/users`, data);
};
const get = (id) => {
    return http.get(`/users/${id}`);
};
export default{
    get,
    create,
};