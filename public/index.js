const handleClick = (event) => {
    let requestObj = {
        name: document.getElementById('myFile').files[0].name,
        type: document.getElementById('myFile').files[0].type,
        size: document.getElementById('myFile').files[0].size
    }

    console.log(requestObj)

    fetch("http://localhost:8000/fileMetadata", {
        method: "POST",
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(requestObj)
    })
}

const test = () => console.log("hit!")