import axios from "axios";

export async function getAuthToken(setErrorToken, navigate, setVerifyToken) {
  const token = window.localStorage.getItem("accessToken");
  console.log(!token, "localStorage");
  if (!token) {
    setErrorToken("Inicie sesión para poder acceder");
    return navigate("/");
  }

  const ERROR_HANDLER = {
    JsonWebTokenError: (err) => {
      setErrorToken(err.response.data.JsonWebTokenError);
      window.localStorage.removeItem("accessToken");
      navigate("/");
    },
    TokenExpiredError: (err) => {
      setErrorToken(err.response.data.TokenExpiredError);
      navigate("/");
    },
    defaultError: () => {
      setErrorToken("Error inesperado");
      navigate("/");
    },
  };

  const config = {
    headers: {
      Authorization: `Bearer ${JSON.parse(token)}`,
    },
  };

  await axios
    .post("http://localhost:3001/users/checkingToken", {}, { ...config })
    .then(({ data }) => {
      console.log(data.meta);
      setVerifyToken(data.meta.ok);
    })
    .catch((err) => {
      console.log(err.response);
      if (err.response) {
        const handler =
          ERROR_HANDLER[Object.keys(err.response.data)[0]] ||
          ERROR_HANDLER.defaultError;

        handler(err);
      }
    });

  //otra forma FUNCIONA
  //   fetch("http://localhost:3001/users/checkingToken", {
  //     method: "POST",
  //     ...config,
  //   })
  //     .then((response) => {
  //       console.log(response, "response handlerLogged");
  //       return response;
  //     })
  //     .catch((err) => {
  //       console.log(err.response);
  //     });
}
