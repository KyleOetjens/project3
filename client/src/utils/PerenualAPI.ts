



export const searchPerenualAPI = (token: any, query: any) => {
    // console.log(`https://trefle.io/api/v1/plants?token=${token}&q=${query}`);
    console.log(`https://perenual.com/api/species-list?key=${token}&q=${query}`);
    // return fetch(`https://trefle.io/api/v1/plants?token=${token}&q=${query}`, {
        return fetch(`https://perenual.com/api/species-list?key=${token}&q=${query}`, {
            
        method: 'GET'
    })
}
