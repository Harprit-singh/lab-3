
const marks='7';
switch (true) {
    //constart here(marks)
  case marks >= 85:
    console.log("A+", "Pass with disctinction");
    break;
    case marks >= 80:
    console.log("A", "Pass with disctinction");
    break;
    case (marks >= 75 && marks <= 79):
    console.log("B+", "Pass with merit");
    break;
    case marks >= 70:
    console.log("B", "Pass with merit");
    break;
    case marks >= 65:
    console.log("B-", "Pass with merit");
    break;
    case marks >= 60:
    console.log("c+", "Pass");
    break;
    case marks >= 55:
    console.log("c", "Pass");
    break;
    case marks >= 50:
    console.log("D", "Fail grades");
    break;
    case marks >= 0:
    console.log("E", "Fail");
    break;
    default:
        console.log("Invalid");
        break;
}// the number will be invalid

if( grade == "A+" || grade == "A" || grade == "A-" ) {
  result = ("Pass with distinction")
}
else if (grade =="B+" ||  grade =="B" || grade == "B-"){
  result = ("Pass with merit")
}
else if (grade =="C+" ||  grade =="C" ){
  result = ("Pass")}

else if (grade =="D"){
    result = ("Fail")}

else if (grade =="E"){
    result = ("Fail")
  }
