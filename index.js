const cities = ["부산", "대구", "모스크바", "예카테린부르크"];
const departure = document.querySelector("#departure");
const arrival = document.querySelector("#arrival");

//도시 출력하기
for (let i = 0; i < cities.length; ++i) {
    const option = document.createElement("option");
    option.text = cities[i];
    option.value = cities[i];
    departure.appendChild(option);
}

//도착지에 출발지 제외한 도시만 추가하기
function populateArrival() {
    arrival.innerHTML = "";
    cities.forEach(city =>{
        if(city !== departure.value){
            const option = document.createElement("option");
            option.value = city;
            option.text = city;
            arrival.appendChild(option);
        }
    });
}
departure.value = cities[0];
populateArrival();

departure.addEventListener("change", populateArrival);

// //같은 도시 선택 시 경고하고 자동 수정
// function validateSelection(){
//     if(departure.value === arrival.value){
//         alert("출발지와 도착지는 같을 수 없습니다!");
//     }

//     for(let city of cities){
//         if(city !== departure.value){
//             arrival.value = city;
//             break;
//         }
//     }
// }
// departure.addEventListener("change", validateSelection);
// arrival.addEventListener("change", validateSelection);

const passenger = document.querySelector("#passenger");
for (let i = 1; i <= 7; ++i) {
    const opt = document.createElement("option");
    opt.text = `${i}명`;
    opt.value = i;
    passenger.appendChild(opt);
}

const calendarTds = document.querySelectorAll("#calendar td");

calendarTds.forEach(td => {
    td.classList.add("hover-effect");
    td.addEventListener("click", () => {
        calendarTds.forEach(cell => cell.style.backgroundColor = "");
        td.style.backgroundColor = "pink";
        console.log(`클릭한 날짜 : ${text}`);

    });
});



