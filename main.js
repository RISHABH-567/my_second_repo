let p = document.querySelector("p");
let btn = document.querySelector("button");





const getdata = async ()=>{
    console.log("getting data...");
       let result =  await fetch("https://api.thecatapi.com/v1/images/search");
        console.log(result);
        let data = await result.json();
        p.innerHTML =   `<img src= "${data[0].url}" style="width: 300px;">`;
   
}

btn.addEventListener("click", getdata);





 