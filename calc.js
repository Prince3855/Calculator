
let screen=document.getElementById("screen");
buttons=document.querySelectorAll("button");
let screenValue=screen.value;
let flag=0;
for(item of buttons){
    item.addEventListener('click',(e)=>{
        buttonText=e.target.innerText;
        ids=e.target.id;
        console.log(buttonText,ids);
        if(buttonText=='DEL')
        {
            screenValue=screenValue.substring(0,screenValue.length-1);
            screen.value=screenValue;
        }
        else if(buttonText=='x²'){
            screen.value=Math.pow(eval(screenValue),2);
            screenValue=screen.value;
        }
        else if(buttonText=='x3' || ids=='x3' ||(buttonText=='3' && ids!='3')){
            screen.value=Math.pow(eval(screenValue),3);
            screenValue=screen.value;
        }
        else if(buttonText=='x'){
            screen.value+='*';
            screenValue+='*';
        }
        else if(buttonText=='C'){
            screen.value="";
            screenValue="";
        }
        else if(buttonText=='='){
            if(screenValue=="" && screen.value!="")
            {
                screenValue=screen.value;
            } 
            try{
                screenValue=eval(screenValue);
            }
            catch(error){
                screenValue='undefine';
            }
            screen.value=screenValue;
        }
        else if(buttonText=="√"){
            flag=1;
            screen.value+=buttonText;
            screen.value+='(';
            screenValue+='Math.pow(';
        }
        else if(buttonText=='log'){
            flag=2;
            screen.value+=buttonText;
            screen.value+='(';
            screenValue+='Math.log(';
        }
        else if(buttonText==')')
        {
            if(flag==1) screenValue+=',0.5)';
            else if(flag==2) screenValue+=')';
            screen.value+=')';
            flag=0;
        }
        else {
            screen.value+=buttonText;
            screenValue+=buttonText;
        }
    })
}

