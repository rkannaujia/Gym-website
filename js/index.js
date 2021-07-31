function validate ()
{
    if(document.myform.firstName.value =="") {
        alert("Please enter your name");
        document.myform.firstName.focus();
        return false;
    }
    if(document.myform.genderName.value =="") {
        alert("Please enter your Gender");
        document.myform.genderName.focus();
        return false;
    }
    if(document.myform.age.value =="") {
        alert("Please enter your age");
        document.myform.age.focus();
        return false;
    }
    
    if(document.myform.areaName.value =="") {
        alert("Please enter your Area Name");
        document.myform.areaName.focus();
        return false;
    }
    return true;
}