/* eslint-disable no-constant-condition */
/* eslint-disable @typescript-eslint/no-explicit-any */

import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

async function doPost(url: string, data: any, token: string) {
  let auth = false;
  try {
    const response = await api.post(url, data, { headers: { Authorization: token } });
    if (response.status === 200) {
      auth = true;
      return { ...response.data, auth };
    }
    return { success: false, msg: 'Post Error' };
  } catch (error: any) {
    /*ESSE ERRO NÃO AFETA O CODIGO.*/
    if ((error.response.status = 401)) {
      auth = false;
    }
    return { success: false, msg: 'Post Error', auth };
  }
}

async function doGet(url: string, token: string) {
  let auth = false;
  try {
    const response = await api.get(url, {
      headers: { Authorization: token },
    });
    if (response.status === 200) {
      auth = true;
      return { ...response.data, auth };
    }
    return { success: false, msg: 'Get Error', auth: true };
  } catch (error: any) {
    if ((error.response.status = 401)) {
      auth = false;
    }
    return { success: false, msg: 'Get Error', auth };
  }
}

async function doDel(url: string, token: string) {
  let auth = false;
  try {
    const response = await api.delete(url, { headers: { Authorization: token } });
    if (response.status === 200) {
      auth = true;
      return { ...response.data, auth };
    }
    return { success: false, msg: 'Post Error' };
  } catch (error: any) {
    /*ESSE ERRO NÃO AFETA O CODIGO.*/
    if ((error.response.status = 401)) {
      auth = false;
    }
    return { success: false, msg: 'Post Error', auth };
  }
}

export { doPost, doGet, doDel };
