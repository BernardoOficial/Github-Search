const fetchData = async (url) => {

    const response = await fetch(url);
    const userDados = await response.json();

    if(!response.ok) {
        throw new Error("Requisição com erro: username não encontrado.");
    }

    return userDados;
}

export default fetchData;