function getUserDetails(id){
    return new Promise((resolve,reject)=>{
        console.log("fun1 called")
        resolve({rollnumber:'122'})
    })
};
function getUserSubjects(userRoll){
    return new Promise ((resolve,reject)=>{
        console.log("fun 2 called")
         resolve({userSubId:'en-1'});
    })
};
function getUserMarks(userSubId){
    return new Promise((resolve,reject)=>{
        console.log("fun-3 called")
        resolve("getting user marks with userId",userSubId)
    })
};
getUserDetails("122").then((result)=>{
    return getUserSubjects(result.rollnumber)
}).then((result)=>{
    return getUserMarks(result.userSubId)
}).then((result)=>{
    console.log(result)
}).catch((error)=>console.log(error)) 