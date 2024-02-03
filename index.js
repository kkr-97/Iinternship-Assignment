function onSubmitConsultationForm() {
    var firstName = document.getElementById("firstName");
    var lastName = document.getElementById("lastName");
    var emailAddress = document.getElementById("emailAddress");
    var phoneNumber = document.getElementById("phoneNumber");
    var message = document.getElementById("message");
    var address = document.getElementById("address");

    function validateInputs() {
        if (firstName.value == "" || lastName.value == "" || emailAddress.value == "" || phoneNumber.value == "" || message.value == "" || address.value == "") {
            document.getElementById("errMsg").style.display = "flex";
            return false;
        }
        document.getElementById("errMsg").style.display = "none";
        return true;
    }

    if (validateInputs()) {
        firstName.value = "";
        lastName.value = "";
        emailAddress.value = "";
        phoneNumber.value = "";
        message.value = "";
        address.value = "";

        alert('Your consultation request has been sent successfully!');
    }
}