import axios from 'axios';

const api=axios.create({
  baseURL:import.meta.env.VITE_API_URL||'http://localhost:5000/api/v1',
  withCredentials:true,
  timeout:20000,
  headers:{Accept:'application/json'}
});

function getErrorMessage(payload,error){
  if(Array.isArray(payload?.errors)&&payload.errors.length){
    return payload.errors.map(item=>item.field?item.field+': '+item.message:item.message).join('; ');
  }
  if(typeof payload?.message==='string'&&payload.message.trim())return payload.message;
  if(error.code==='ECONNABORTED')return 'The server took too long to respond. Please try again.';
  return error.response?'Request failed. Please try again.':'Unable to connect to the server. Check your connection.';
}

api.interceptors.response.use(response=>response,error=>{
  const payload=error.response?.data;
  const isBlob=typeof Blob!=='undefined'&&payload instanceof Blob;
  const details=payload&&typeof payload==='object'&&!Array.isArray(payload)&&!isBlob?payload:{};
  return Promise.reject({...details,message:getErrorMessage(payload,error)});
});

export default api;
