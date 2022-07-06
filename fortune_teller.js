var fortune= 8; 

function fortuneteller() {
    if (fortune <=3 && fortune ==0) {
    let fortunes= "You have a low fortune!";
   
    return fortunes;

}
    else if (fortune >3 && fortune <=7) { 
    let fortunes1= "You have an average fortune";

    return fortunes1;

}
    else if (fortune >7 && fortune <=10){
    let fortunes2= "You have a good fortune";

    return fortunes2;

}
    else if (fortune >10 ){
    let fortunes3= "This fortune can not be read correctly";

    return fortunes3;  
}
} 

console.log(fortuneteller());