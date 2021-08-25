function addNumbers(numOne: number, numTwo: number){
    return numOne + numTwo;
}

//1-works
addNumbers(1,2);

//2-Errors
//addNumbers(1,2,3);
//addNumbers(1,2,3,"Foo");

function concatenateIt(fN: string, lN: string){
    return fN + lN;
}

console.log(concatenateIt("Amanda", "Wilkerson"))


function myBool(username: string, password:string): boolean{
    if(username=="elevenfiftyuser"&&password=="Letmein1234!"){
        return true;
    }
    else{
        return false;
    }
}


