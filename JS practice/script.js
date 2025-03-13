// fetch('https://google.com')
// .then(res => res.text())
// .then(data => console.log(data));
async function fetchData()
{
    let res = await fetch('https://google.com');
    let data =  await res.text();
    console.log(data);   
}
fetchData('https://google.com');








