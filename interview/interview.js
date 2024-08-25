//write a function that return the largest number index
function getLargestNumberIndex(arr) {
    let tempNum = arr[0];
    let maxIndex = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > tempNum) {
            tempNum = arr[i];
            maxIndex = i;
        }
    }
    return maxIndex;
}

console.log("getLargestNumberIndex", getLargestNumberIndex([7, 3, 100, 4, 12, 9, 67]))//expect 3


//detect exact location of user
const button = document.querySelector("button");

button.addEventListener("click", () => {
    navigator.geolocation.getCurrentPosition(pos => {
        //getting latitude and longitude from position object
        const { latitude, longitude } = pos.coords;
        //getting location of passed coordinates using geocoding API
        const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
        fetch(url).then(res => res.json()).then(data => {
            console.table(data.address);
        }).catch(() => {
            console.log("Error fetching data from API")
        })
    });
});

