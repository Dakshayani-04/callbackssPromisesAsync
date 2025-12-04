function getUserDetails(id,getUserSubjects){
    console.log("getting user details by using userId",id)
    getUserSubjects({userroll: "123"})
}
function getUserSubjects(userRoll,getUserMarks){
    console.log("getting user subjects from using userroll",userRoll);
    getUserMarks({subid:"en-1"})
}
function getUserMarks(userSubId){
    console.log("getting the marks  by using subId",userSubId)
}
getUserDetails("456",function(userRoll){
    getUserSubjects(userRoll,function(userSubId){
        getUserMarks(userSubId)
    })
});