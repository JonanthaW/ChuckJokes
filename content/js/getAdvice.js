var loadConfig = () => {
  const url = "https://api.chucknorris.io/jokes/random";
  document.querySelector(".phraseContent").addEventListener("click", async () => {
    try {
      await fetch(url)
        .then(response => {
          if (!response.ok) {
            return new Error("A requisição falhou")
          }
          if (response.status === 404) {
            return new Error("não encontrou qualquer resultado")
          }
          else {
            return response.json();
          }
        })
        .then(data => {
          document.querySelector("#advice").innerText = data.value;
          }
        );
    }
    catch(err) {
      console.log("oops, algo deu errado")
    }
  })
}
loadConfig();
