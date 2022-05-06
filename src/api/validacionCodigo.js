import { appGlobal } from './appGlobal';

export async function validacionCodigo(obj) {
  try {
    const data = {
      codigo: obj.codigo,
      numero: obj.numero
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
