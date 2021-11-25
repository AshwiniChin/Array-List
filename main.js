var studentArray = [];

function display() {
var student1 = document.getElementById("input1").value;
var student2 = document.getElementById("input2").value;
var student3 = document.getElementById("input3").value;
var student4 = document.getElementById("input4").value;


studentArray.push(student1);
studentArray.push(student2);
studentArray.push(student3);
studentArray.push(student4);

console.log("studentArray is = "+ studentArray);

document.getElementById("displayNames").innerHTML = studentArray;


document.getElementById("displayButton").style.display = "none";
document.getElementById("sortButton").style.display = "inline-block";

}

function sort(){
    studentArray.sort();
    document.getElementById("displayNames").innerHTML = studentArray;
}