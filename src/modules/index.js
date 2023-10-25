import weatherAPI from './weatherAPI';

async function fetchData() {
    try {
        let data = await weatherAPI(); // Pass the city name here
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

fetchData();
