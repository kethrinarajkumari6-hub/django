function vote() {
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var res = document.getElementById("res");

    if (age >= 18) {
        res.innerHTML= "you are eligible to vote.";
    } else {
        res.innerHTML = "you are still a child.";
    }
}
