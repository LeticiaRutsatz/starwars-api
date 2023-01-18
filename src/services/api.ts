import axios, { AxiosResponse } from "axios";
import { respostaAPI } from "../store/modules/Personagens/types";

axios.defaults.baseURL = 'https://swapi.dev/api/';

const apiGet = async (rota: string): Promise<respostaAPI> => {
  try{
    const resposta : AxiosResponse = await axios.get(rota);

    const retornoAPI : respostaAPI = {
      success: resposta.status,
      data: resposta.data.results
    };

    return retornoAPI
  } catch (error : any) {

    const retornoAPIerror : respostaAPI = {
      success: error.resposta.status,
      data: error.resposta.data.results
    }

    return retornoAPIerror;
  }
}

export {apiGet}