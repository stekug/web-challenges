console.clear();

const url = "https://swapi.py4e.com/api/people";

async function fetchData() {
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
  const vader = data.results[3];
  console.log(vader);
  console.log(vader.height);
}

fetchData();
