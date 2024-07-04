

    // user name verification

    var attempt = 3; // Variable to count number of attempts.
    // Below function Executes on click of login button.
function processLoginformData(){
    var username = document.getElementById("usrname").value;
    var password = document.getElementById("psw").value;
    if ( username == "Formget" && password == "formget#123"){
    alert ("Login successfully");
    window.location = "Zasam.html""; // Redirecting to other page.
    return false;
    }
    else{
      attempt --;// Decrementing by one.
           alert("You have left "+attempt+" attempt;");
           // Disabling fields after 3 attempts.
           if( attempt == 0){
            document.getElementById("username").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("submit").disabled = true;
            return false;
}
}
}

  


function processFormData()
{   alert('Please verify that the information you entered is correct');
    //setting variables for the  Form  functions in the sign up page 
    let form = document.getElementsById('userForm');
    let userName = document.getElementById('userName') +'  '+ document.getElementById('lastName');;
    let age = document.getElementById('age');
    let contact = document.getElementById('phone');
    let email = document.getElementById('email');
    let gender = document.getElementById('gender');
    let profession = document.getElementById('occupation');
    let nationality = document.getElementById('country');

    //inserting data in the table with predefined function 
    insertdata(form,userName,age,contact,email,gender,profession,nationality);
    
    //clear the form field 
    clearFormData();
}



function colorTransformation(){
    document.getElementsByClassName("b1")[0].style.backgroundColor = "yellow";
    document.getElementsByClassName("b2")[0].style.backgroundColor = "yellow";
    document.getElementsByClassName("b3")[0].style.backgroundColor = "yellow";
    document.getElementsByClassName("b4")[0].style.backgroundColor = "yellow";
    document.getElementsByClassName("b5")[0].style.backgroundColor = "yellow";
    document.getElementsByClassName("b6")[0].style.backgroundColor = "yellow";
    document.getElementsByClassName("b7")[0].style.backgroundColor = "yellow";
    document.getElementsByClassName("b8")[0].style.backgroundColor = "yellow";
}


//for the search bar 

function performSearch() {
    const query = document.getElementById('search-bar').value.toLowerCase();
    const resultsContainer = document.getElementById('search-results');

    // Example data to search through
    const data = [
        'apple',
        'banana',
        'orange',
        'grape',
        'pineapple',
        'mango'
    ];

    // Clear previous results
    resultsContainer.innerHTML = '';

    // Filter data based on search query
    const results = data.filter(item => item.toLowerCase().includes(query));

    // Display results
    if (results.length > 0) {
        results.forEach(item => {
            const div = document.createElement('div');
            div.textContent = item;
            resultsContainer.appendChild(div);
        });
    } else {
        resultsContainer.textContent = 'No results found';
    }
}

