/* sellecting elements */
const input = document.getElementsByTagName("input")
console.log(input)
const buttons = document.getElementsByTagName("button") ; 
console.log(buttons) ; 
const error = document.querySelectorAll(".error") ; 


/* the regex fot the email validation */
const regex = /^[\w_]+@[a-z]+.[a-z]+/gi ; 
console.log("exemple@gmail.com".match(regex)) ; 

/* check when the user validate the form */

arrbottons = Array.from(buttons) ; 
arrbottons.forEach((element, index) => {
    console.log(element) ; 
    console.log(index) ; 
    element.addEventListener("click" , function(e) {
        //e.preventDefault()
        if (!input[index].value.match(regex) ){
                e.preventDefault();
                error[index].style.display = "block" ; 
                //error[index].textContent = "please check your email"
            }
        element.addEventListener("blur" , function() {
            error[index].style.display = "none" ; 
        }) 
    })
});