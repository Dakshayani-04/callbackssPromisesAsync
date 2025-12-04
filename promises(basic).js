const myPromise =new Promise((resolve,reject)=>{
    if(true){
        resolve("promises called")
    }
    else{
        reject("error")
    }
    

})
myPromise.then((result)=>{
    console.log("success",result)
})
           .catch((error)=>{
            console.log("error")
           })