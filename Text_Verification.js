<input id="magicWord" placeholder="What's the passphrase?" > 

<button onclick="verifyIt()" > Submit </button>

<p id ="message"> </p>

<script>
function verifyIt() {
check = document.getElementById("magicWord").value


if (check =="Minute") {
document.location.href="https://minutecoding.dev"

}

else {

document.getElementById("message").innerHTML = "Try Minute"
}

}


</script>