const fetchUser = async (username) => {
    try {   
        const response = await fetch(
          `https://api.github.com/users/${username}`
        );
        const userDados = await response.json();
        return userDados;
    } catch (erro) {
        throw new Error('Requisição com erro')
    }
}

export default fetchUser;