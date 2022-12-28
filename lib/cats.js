import {apiKey,url} from '../pages/api/hello'


export async function getCatsId() {
    const res = await fetch(url,{headers: {
    'x-api-key': apiKey
    }})
    const data = await res?.json();
    const catsPaths = data.map(item => {
        return {
            params: {
                id: item.id,
            },
        };
    });

    return catsPaths;
    
}

export async function getCatsInfo(id) {
    const res = await fetch(url,{headers: {
        'x-api-key': apiKey
    }})
    const data = await res.json();
    const result = data.filter(cat => cat.id === id)
    return {
        data: result
    }
}

export async function getCats() {
    const res = await fetch(url,{headers: {
        'x-api-key': apiKey
    }})
    const result = await res.json();
    return result;
}