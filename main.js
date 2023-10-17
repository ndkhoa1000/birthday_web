// reference to Dom elements
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const book = document.querySelector("#book");

const paper1 = document.querySelector("#p1");
const paper2 = document.querySelector("#p2");

//business logic
    let currentLocation = 1;
    let numOfPapers = 2;
    let maxLocation = numOfPapers + 1;
    
const openBook= () =>{
    book.style.transform = "translateX(50%)";
    prevBtn.style.transform = "translateX(-250px)";
    nextBtn.style.transform = "translateX(250px)";
}
const closeBook = (isAtBeginning) => {
    if(isAtBeginning){
    book.style.transform = "translateX(0%)";
    }
    else{
    book.style.transform = "translateX(100%)";
    }
    prevBtn.style.transform = "translateX(0px)";
    nextBtn.style.transform = "translateX(0px)";
    
}
const goNextPage = () =>{
    if(currentLocation <maxLocation){
        switch(currentLocation){
            case 1:
                openBook();
                paper1.classList.add("flip");
                paper1.style.zIndex = 1;
                break;
            case 2:
                paper2.classList.add("flip");
                paper2.style.zIndex = 2;
                closeBook(false);
                break;
            default:
                throw new Error("unknown state");
        }
        currentLocation++;
    }
}
const goPrevPage = () => {
    if(currentLocation > 1){
        switch(currentLocation){
            case 2:
                closeBook(true);
                paper1.classList.remove("flip");
                paper1.style.zIndex = 2;
                break;
            case 3:
                openBook();
                paper2.classList.remove("flip");
                paper2.style.zIndex = 1;
                break;
            default:
                throw new Error("unknown state");
        }
        currentLocation--;
    }
}

//Event listener
prevBtn.addEventListener("click", goPrevPage);
nextBtn.addEventListener("click", goNextPage);