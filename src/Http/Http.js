import axios from "axios";
import { API } from "../utils/Constante";

const axiosConfig = () => {
    return axios.create({
        baseURL: API.URL_BASE,
        headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Access-Control-Allow-Origin": "*",
            "Content-type": "application/json"
        }
    });
}

const Get = async ({url}) => {
    return axiosConfig().get(url).then((response) => {
        return {data:response};
    }).catch((error) => {
        if(error.response){
            return {error:error.response.data};
        }else if(error.request){
            console.error(error.request);
            return {data:{status:400}};
        }else{
            console.error('Error', error);
            return {data:{status:500}};
        }
    });
}

const Post = async ({url,data}) => {
    return axiosConfig().post(url,data).then((response) => {
        return {data:response};
    }).catch((error) => {
        if(error.response){
            return {error:error.response.data};
        }else if(error.request){
            console.error(error.request);
            return {data:{status:400}};
        }else{
            console.error('Error', error);
            return {data:{status:500}};
        }
    });
}

const Put = async ({url,data}) => {
    return axiosConfig().put(url,data).then((response) => {
        return {data:response};
    }).catch((error) => {
        if(error.response){
            return {error:error.response.data};
        }else if(error.request){
            console.error(error.request);
            return {data:{status:400}};
        }else{
            console.error('Error', error);
            return {data:{status:500}};
        }
    });
}

const Delete = async ({url}) => {
    try{
        return await axiosConfig().delete(url)
    }catch(error){
        return null
    }
}

export {Get,axiosConfig,Delete,Put, Post}