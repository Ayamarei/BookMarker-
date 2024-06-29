

var bookmarkerName = document.getElementById("bookmarkerName");
var bookmarkerUrl = document.getElementById("siteUrl");
var  boxInvalid=document.getElementById("box-invalid")


var bookmarkeUsers = [];

if (localStorage.getItem("sites")!=null) {
    bookmarkeUsers = JSON.parse(localStorage.getItem("sites"))
    displayData()
}

function addData() {
   if (regexName() &&regexUrl()) {
    bookmarkeUser = {
        name: bookmarkerName.value,
        siteUrl:bookmarkerUrl.value
    }
    bookmarkeUsers.push(bookmarkeUser)
    localStorage.setItem("sites", JSON.stringify(bookmarkeUsers))
    displayData()
    clearData()
    }
   else {
    boxInvalid.classList.remove("d-none")
    }
}


function displayData() {
    var cartona = ``
    for (var i = 0; i < bookmarkeUsers.length; i++) {
        cartona+=`  <tr>
        <td>${i+1} </td>
        <td>${bookmarkeUsers[i].name}</td>
        <td>
            <button class="btn btn-visit"> <a href="${bookmarkeUsers[i].siteUrl }"><i class="fa-solid fa-eye pe-2"></i>Visit</a> 
                </button>
        </td>
        <td>
            <button class="btn btn-delete" onclick="deleteData(${i})">
                <i class="fa-solid fa-trash-can pe-2"></i>Delete
            </button>
        </td>
    </tr>`
    }
    document.getElementById("tBody").innerHTML=cartona
}
function deleteData(index) {
    bookmarkeUsers.splice(index, 1)
    localStorage.setItem("sites", JSON.stringify(bookmarkeUsers))
    displayData()
}
 
function clearData() {
    bookmarkerName.value = "";
    bookmarkerUrl.value=""
}

function regexName() {
    
    var regex = /^[a-z]{3,8}$/
    var text = bookmarkerName.value
    var x = regex.test(text)
    if (x) {
        bookmarkerName.classList.add("is-valid")
        bookmarkerName.classList.remove("is-invalid")
        return true

    } else {
        bookmarkerName.classList.remove("is-valid")
        bookmarkerName.classList.add("is-invalid")
        return false
    }
}


function regexUrl() {
    
    var regex = /^(http:)\/\/[a-z]{3,}\.[a-z]{2,}$/
    var text = bookmarkerUrl.value
    var x = regex.test(text)
    if (x) {
        bookmarkerUrl.classList.add("is-valid")
        bookmarkerUrl.classList.remove("is-invalid")
        return true

    } else {
        bookmarkerUrl.classList.remove("is-valid")
        bookmarkerUrl.classList.add("is-invalid")
        return false
    }
}
 
  function deletBox(){
    boxInvalid.classList.add("d-none")
  
}