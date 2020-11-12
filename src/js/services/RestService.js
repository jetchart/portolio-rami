import AXIOS from "axios";

export const URL_API = 'https://portfoliorami-e2e7.restdb.io/rest';
export const API_KEY = '5fa05da0ba3c7134ff6bf8d6';

export const RestService = {
    getReel$() {
        return AXIOS.get(`${URL_API}/reel?apikey=${API_KEY}&q={}&max=1&sort=id&dir=-1`);
    },
    getQuienesSomos$() {
        return AXIOS.get(`${URL_API}/quienes-somos?apikey=${API_KEY}&q={}&max=1&sort=id&dir=-1`);
    },
    getPortofolio3d$() {
        return AXIOS.get(`${URL_API}/portfolio-3d?apikey=${API_KEY}&q={}&sort=id&dir=-1`);
    },
    getPortofolioIlustracion$() {
        return AXIOS.get(`${URL_API}/portfolio-ilustracion?apikey=${API_KEY}&q={}&sort=id&dir=-1`);
    },
    getPortofolioMarketingDigital$() {
        return AXIOS.get(`${URL_API}/portfolio-marketing-digital?apikey=${API_KEY}&q={}&sort=id&dir=-1`);
    },
    getPortofolioMotionGraphics$() {
        return AXIOS.get(`${URL_API}/portfolio-motion-graphics?apikey=${API_KEY}&q={}&sort=id&dir=-1`);
    },
    
}