
const getFacts = async () => {
    const response =await fetch("https://cat-fact.herokuapp.com/facts");
    console.log(response);
    // let data2 =  response.json();
    let data = await response.json();
    document.write(data[0].text);
    console.log(data[0].text);
    // console.log(data2);
}

// const getFacts = () => {
//     const response = fetch("https://cat-fact.herokuapp.com/facts");
//     response.then((response) => {
//         return response.json();
//     })
//         .then((data) => {
//             document.write(data[0].text)
//         console.log(data)
//     })
    
// }