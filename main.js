function mubeen(){
    var status = document.getElementById("status")

    if(navigator.onLine){
        console.log("Online")
        status.innerText = "You are online!"
        status.style.color = "Green"
    }else{
        console.log("Offline")
        status.innerText = "You are offline"
        status.style.color = "Red"
    }
}

window.addEventListener("online" , mubeen())

window.addEventListener("offline" , mubeen())

//page visibility API

document.addEventListener("visibilitychange" , function(){
    if(document.hidden){
        document.title = "😁 Come Back"
    }else{
        document.title = "Ya Hooo!"
    }
})



// Orientation API

window.addEventListener("deviceorientation" , function(e){
    var alpha = e.alpha.toFixed(2)
    var beta = e.beta.toFixed(2)
    var gamma = e.gamma.toFixed(2)

    this.document.getElementById("device").innerHTML =
    `Alpha : ${alpha} , Beta : ${beta} ,Gamma : ${gamma}`
})