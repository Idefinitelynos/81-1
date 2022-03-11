nameofthestudentarray = []
function submit(){
    var  display_student_array=[]
    for (let i = 1; i <= 4; i++) {
    var nameofthestudent = document.getElementById("name_of_the_student_"+ i).value
    nameofthestudentarray.push(nameofthestudent)
    }
console.log(nameofthestudentarray)
var lengthofthearray=nameofthestudentarray.length
console.log(lengthofthearray)
for (let r = 0; r < lengthofthearray; r++) {
display_student_array.push("<h4>NAME-"+nameofthestudentarray[r]+"</h4>")
}
console.log(display_student_array)
document.getElementById("display_name_with_commas").innerHTML=display_student_array
var remmovecommas=display_student_array.join(" ")
document.getElementById("display_name_without_commas").innerHTML=remmovecommas
document.getElementById("submit_button").style.display="none"
document.getElementById("sort_button").style.display="inline-block"
}
function sorting(){
    nameofthestudentarray.sort()
    console.log(nameofthestudentarray)
    var  display_student_array=[]
console.log(nameofthestudentarray)
var lengthofthearray=nameofthestudentarray.length
console.log(lengthofthearray)
for (let r = 0; r < lengthofthearray; r++) {
display_student_array.push("<h4>NAME-"+nameofthestudentarray[r]+"</h4>")
}
console.log(display_student_array)
document.getElementById("display_name_with_commas").innerHTML=display_student_array
var remmovecommas=display_student_array.join(" ")
document.getElementById("display_name_without_commas").innerHTML=remmovecommas
}