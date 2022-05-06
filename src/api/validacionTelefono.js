import { appGlobal } from './appGlobal';

export async function validacionTelefono(obj) {
  try {
    const data = { numero: obj.numero };
    const url = appGlobal.apiCredito + "/getPhone";
    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    };
    const response = await fetch(url, params);
    const result = await response.json();
    return result;
  } catch (error) {
    return null;
  }
}
