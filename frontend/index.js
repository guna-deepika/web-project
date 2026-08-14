// alert("hello from js")
const users = [
 {
   "name" : "Jonn Doe",
   "gender" : "Male",
   "image" : "john.png"
 },
   {
   "name" : "Jane Doe",
   "gender" : "Feale",
   "image" : "jane.png"
 }
]

var curIndex = 0;

function toggle(){
 if(curIndex == 0)
   curIndex = 1;
 else
   curIndex = 0;

 document.getElementById("card-image").src = users[curIndex].image
 document.getElementById("card-name").innerText =users[curIndex].name
 //gender needs to be updated
}

function random(){
    fetch('https://randomuser.me/api')
        .then(function(response){
            return response.json();

        })
        .then(function(data){
            var detail=data.results[0];
            var fullname=detail.name.title+" "+detail.name.first+" "+detail.name.last
            
            document.getElementById("card-image").src=detail.picture.large

            
            document.getElementById("card-gender").innerText=detail.gender
            document.getElementById("card-name").innerText=fullname
            
        })

}
