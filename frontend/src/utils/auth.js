/* export const BASE_URL = 'https://api.gabriel14.mooo.com'; */

export const BASE_URL = "https://api.gabriel14.mooo.com";

export const register = async (email, password) => {
  try {
    const response = await fetch(`${BASE_URL}/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (err) {
    console.error("Error:", err);
    throw err;
  }
};

export const login = async (email, password) => {
  try {
    const response = await fetch(`${BASE_URL}/signin`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    console.log("🚀 ~ login ~ response:", response);

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (err) {
    console.error("Error:", err);
    throw new Error("Correo o contraseña incorrectos");
  }
};

export const getUserToken = async (token) => {
  try {
    const response = await fetch(`${BASE_URL}/users/me`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (err) {
    console.error("Error:", err);
    throw err;
  }
};
