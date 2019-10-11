// import React from 'react';

const fetchData = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        const data = await response.json();
        console.log(data);
        return JSON.stringify(data);
    } catch (e) {
        console.log(e);
    }
}

export default fetchData;