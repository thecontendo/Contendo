import api from 'app-interface/api-manager';

const getUserInfo = (id: string) => api.get(`Users/${id}`);

export {getUserInfo};
