function encrypt(key, raw_text, algorithm) {
    let output = "";

    if (algorithm.value == "AES") {
        output = CryptoJS.AES.encrypt(raw_text, key)
    }
    else if (algorithm.value == "DES") {
        output = CryptoJS.DES.encrypt(raw_text, key)
    }
    else if (algorithm.value == "3_DES") {
        output = CryptoJS.TripleDES.encrypt(raw_text, key)
    }
    else if (algorithm.value == "OTP") {
        output = otp(raw_text, key, "encrypt", true);
    }
    else {
        output = "No Encryption algorithm selected"
    }
   
    document.getElementById("res").innerHTML = output
}

function decrypt(key, encr_text, algorithm) {
    let output = "";

    if (algorithm.value == "AES") {
        output = CryptoJS.AES.decrypt(encr_text, key).toString(CryptoJS.enc.Utf8)
    }
    else if (algorithm.value == "DES") {
        output = CryptoJS.DES.decrypt(encr_text, key).toString(CryptoJS.enc.Utf8)
    }
    else if (algorithm.value == "3_DES") {
        output = CryptoJS.TripleDES.decrypt(encr_text, key).toString(CryptoJS.enc.Utf8)
    }
    else if (algorithm.value == "OTP") {
        output = otp(encr_text, key, "decrypt", true);
    }
    else {
        output = "No dycryption algorithm selected"
    }
        
    document.getElementById("res").innerHTML = output
}

var choice=document.getElementById("opperation")
choice.onclick = helper;
function helper(){
    console.log("inside helper")
        key_label.innerHTML = "Encryption key"
        submit_button.innerHTML = "Encrypt"
   }

var choice2=document.getElementById("opperation2")
choice2.onclick = helper2;
function helper2(){
    console.log("inside helper2")
        document.getElementById("key_label").innerHTML = "Decryption key"
        submit_button.innerHTML = "Decrypt"
   }

let copy = document.getElementById("copy")
copy.addEventListener("click", function() {
    let copyText = document.getElementById("res")
    navigator.clipboard.writeText(copyText.innerHTML)
    
    copy.innerHTML = "Copied!"
    copy.disabled = true
})

let paste = document.getElementById("paste")
paste.addEventListener("click", async function() {
    let pasteText = await navigator.clipboard.readText()
    document.getElementById("text").value = pasteText
})

let submitButton = document.getElementById("submit")

let crypto = document.getElementById("opperation")

crypto.addEventListener("change", function(event) {
    let opperation = document.getElementById("opperation").value
   
})

let myForm = document.getElementById("myForm")

myForm.addEventListener("submit", function(event) {
    event.preventDefault()

    copy.innerHTML = "Copy"
    copy.disabled = false
    
    let key = document.getElementById("key").value
    let text = document.getElementById("text").value
    let algorithm = document.getElementById("algorithm")

    const radioButtons = document.querySelectorAll('input[name="opperation"]');
    let chosenopp;
    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            chosenopp = radioButton.value;
            break;
        }
    }
    
    console.log(chosenopp)
    if (chosenopp === "enc")
        encrypt(key, text, algorithm)
    else if (chosenopp === "dec")
        decrypt(key, text, algorithm)

})

