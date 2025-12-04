function getUserDetails(id){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({userRoll:567})
        },2000);
    })
};
const myfun = async()=>{
    console.log("123")
    const result=await getUserDetails("789")
    console.log(result)
    console.log("456")
};
myfun()