function myFunction(){
    var name=document.myform.pname.value;
    var number=document.myform.pnumber.value;
    var email=document.myform.pemail.value;
    var date=document.myform.pdate.value;
    var time=document.myform.ptime.value;
    var count=document.myform.pcount.value;
    
    if (name==null || name=="")
    {
        alert("Name Can't Be Blank");
        return false;
    }

    
    else if(number==null || number=="" || number.length<10)
    {
        alert("Number Must Be Atleast 10 Characters Long");
        return false;
    }


      else if(email==null || email=="")
       {
        alert("Enter Valid Email ID And Tap the Verify Button");
        return false;
       }
     
       
     else if(date==null || date==""){
        alert("Enter the Date");
        return false;
     }
   

     else if(time==null || time==""){
        alert("Enter the Time");
        return false;
     }
   

     else if(count==null || count==""){
        alert("Enter the Count of People");
        return false;
     }
   

    else
    {
        alert(name + ' ' + "Your Have Successfully Submitted");
        return true;
    }
}



function myFunction1(){
    var email=document.myform.pemail.value;

    if(email==null || email=="")
                  {
                     alert("enter the valid mail ID to verify");
                     return false;
                  }
                  
                  else if (email.match(/^([a-zA-Z0-9]+)@([a-zA-Z]+)([\.]+)([a-z]{2,5})$/))
                   {
                     alert("Your Mail Has Been Verified");
                     return true;
                   }                  
}


function myContact(){
    var cname=document.c1.fname.value;
    var cnumber=document.c1.fnumber.value;
    var cmail=document.c1.femail.value;
    var caddress=document.c1.faddress.value;

    if(cname==null || cname==""){
        alert("Enter your name");
        return false;
    }

    else if(cnumber==null || cnumber=="" || cnumber.length<10){
        alert("Enter a Valid Number");
        return false;
    }

    else if(cmail==null || cmail==""){
        alert("Enter a Valid Email ID")
        return false;
    }

    else if(caddress==null || caddress==""){
        alert("Enter Your Address");
        return false;
    }

    else{
        alert(cname + ' '+ "You Have Successfully Submitted");
        return true;
    }
}

