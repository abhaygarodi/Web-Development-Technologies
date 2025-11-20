exports.SayMorning = function(){
    const hour = new Date().getHours();
    if(hour < 12){
        return "Good Morning"
    }
    else if(hour < 17){
        return "Good afternoon"
    }
    else{
        return "Good Night"
    }
    
}
 