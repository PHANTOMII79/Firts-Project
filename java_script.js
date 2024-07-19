function save(){
     let Esm = document.getElementById("NameBox").value;
     console.log(Esm);
   localStorage.setItem("Name" , ` ${Esm} ` );

   let sexSelector = document.getElementsByName("gender");
   let sex;
   sexSelector.forEach(
    (radio) => {
        if (radio.checked){
            sex = radio.value;
        }
    }
   );
   console.log(sex);
   let Name = localStorage.getItem("Name");
   document.getElementById("savedBox").innerHTML = Name + " is " + sex;
}

function Clear(){
    document.getElementById("savedBox").innerHTML = "Saved Answer Was Cleared."
}

async function fetchdata(){
    try{

        const NAME = document.getElementById("NameBox").value;
        console.log(NAME)
        const response = await fetch(`https://api.genderize.io?name=${NAME}`);
        if(!response.ok){

        throw new Error("we dont have this name");
        }
        const data = await response.json();
        const sex = data.gender;
        document.getElementById("gender").innerHTML = sex;
        const probability = data.probability;
        document.getElementById("probability").innerHTML=`${probability}` + "%";



    }
    catch(error){
        



    }
}
    fetchdata();

// function fetch(){
//     fetch(`https://api.genderize.io?name=peter`)
//     .then(response => {
//         if(!response.ok){
//             throw new Error('network response was not ok')
//         }
//          return response.json()
//         })
//     .then(date => console.log(data));
    
//     .catch(error => {
//         console.error('ye mohskely hast', error);
//     })
//     }

