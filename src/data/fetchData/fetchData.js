const fetchData = async (url) => {
    try {   
        const response = await fetch(url);
        const userDados = await response.json();
        return userDados;
    } catch (erro) {
        throw new Error('Requisição com erro')
    }
}

export default fetchData;