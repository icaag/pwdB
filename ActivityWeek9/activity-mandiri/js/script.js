function fn_ValForm(){
    var sMsg = "";

    
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var pesan = document.getElementById("message");
    
    var name_value = name.value.replace(/^\s+|\s+$/g, "");
    var email_value = email.value.replace(/^\s+|\s+$/g, "");
    var pesan_value = pesan.value.replace(/^\s+|\s+$/g, "");

    var formatEmail = /^[a-z0-9][a-z0-9_.-]*[a-z0-9]@[a-z0-9][a-z0-9_.-]*[a-z0-9]\.[a-z0-9]{2,4}$/i;

    if (name_value === "") {
        sMsg += "\n*Anda belum mengisikan nama";
    }

    if (email_value === "") {
        sMsg += "\n*Anda belum mengisikan email";
    }else {
        if (!formatEmail.test(email_value)) {
            sMsg += "\n* Format email tidak valid";
        }
    }
            
    if (pesan_value === "") {
        sMsg += "\n*Anda belum mengisikan pesan";
    }

    if(sMsg != ""){
        alert("Peringatan:\n" + sMsg);
        return false;
    }else{
        return true;
    }
}