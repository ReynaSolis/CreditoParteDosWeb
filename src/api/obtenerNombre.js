import { appGlobal } from './appGlobal';

export async function obtenerNombre(obj) {
  try {
    const data = {
      curp: obj.curp,

    };
    const url = appGlobal.apiCredito + "/getResponse";
    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data),
    };
    const response = await fetch(url, params);
    const result = await response.json();
    return result;
  } catch (error) {
    return null;
  }
}
