let data = [
    {
        name: "Asad" ,
        age: "21"
    },
    {
        name: "Ammaz" ,
        age: "21"
    },
    {
        name: "Usama" ,
        age: "21"
    },
    {
        name: "Mubeen" ,
        age: "21"
    },
    {
        name: "Ali" ,
        age: "19"
    },
    {
        name: "Haider" ,
        age: "15"
    },
    {
        name : "Abdullah" ,
        age : "16"
    },
    {
        name : "Abdullah" ,
        age : "16"
    }
]

const detail = document.getElementById("info");

let some = data.map((sas)=>{

    return "<div>" + "This is " + sas.name + " and his age is " + sas.age + "</div>"
    
});

detail.innerHTML = some.join("\n");