function onSubmit() {

    let val = true
    let name = document.formName.Name.value
    let num = document.formName.Number.value
    let email = document.formName.Email.value
    let age=document.formName.Age.value
    //alert("Hiii "+name+","+"with phone number "+num+" and email id "+email)


    if(name.length<5 || name.length>10){
        val=false;
        setError('id','Please provide min 5 and max 10 char');
    }

    if (num.length !== 10) {
        val = false;
        setError();
    }

    if(age<18){
        val=false;
        setError();
    }
    return val
}
function setError(){
    alert("Error")
}
function Click(){
    //document.getElementById('spanid').innerHTML='hi'
    let doThis=document.getElementsByClassName('spanid')[0].innerHTML='hello'
    console.log('doThis>>>doThis',doThis);
}
    
    function submit(){
        let doThis=document.getElementsByTagName('h2')[0].innerHTML='Login form'
    console.log('doThis>>>doThis',doThis);
}
