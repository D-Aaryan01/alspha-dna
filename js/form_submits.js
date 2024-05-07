//////////// DECLARE COMMON VARIBALES START ///////////////
let why = "";
var filter = /^[a-zA-Z0-9]+[a-zA-Z0-9_.-]+[a-zA-Z0-9_-]+@[a-zA-Z0-9]+[a-zA-Z0-9.-]+[a-zA-Z0-9]+.[a-z]{2,4}$/;

//////////// DECLARE COMMON VARIBALES END ///////////////

document.getElementById('topform').addEventListener('submit', function (event) { // DECLARE form id. Eg: topform
    event.preventDefault(); // Prevent the default form submission behavior
    SubmitContUp(); // Call the submitfunction
});

async function SubmitContUp() {

    let name = document.getElementById('top_fname').value;
    let phone = document.getElementById('top_phone').value;
    let email = document.getElementById('top_email').value;
    // let service = document.getElementById('top_services').value;

    if (name.trim() == "" || phone.trim() == "")
        why += "mm";

    if (email.trim() == "")
        why += "mm";
    else {

        if (filter.test(email)) {
        }
        else {
            why += "mm";
        }
    }


    if (why != "") {
        document.getElementById('ContactMsg1Up').style.display = "block";
        return false;
    }
    else {

        document.getElementById('ContactMsg1Up').style.display = "none";

        // List of email addresses
        const emailAddresses = ["aaryanraj_lotus@outlook.com", "info@dukebizadvisors.com"]; // multiple emails in it
        const Msubject = `Duck Business Advisors`;    // REQUIRED VALUE FORM MAIL SUBJECT
        const MailContent = `Full Name: ${name}, Email Address: ${email}, Phone Number: ${phone}`; // REQUIRED VALUE MAIL CONTENT

        // Array to hold promises for each email
        const emailPromises = [];

        // Iterate over each email address
        emailAddresses.forEach((toAddress) => {
            const emailPromise = MailSend(toAddress, Msubject, MailContent) // Replace "Subject" and "Mail content" with actual subject and content
                .then((result) => {
                    if (result.success) {
                        console.log("Mail sent successfully to", toAddress);
                    } else {
                        console.log("Failed to send mail to", toAddress + ":", result.error);
                        // Your failure handling code here
                    }
                })
                .catch((error) => {
                    console.error("An error occurred while sending mail to", toAddress + ":", error);
                });

            emailPromises.push(emailPromise);
        });

        // Wait for all emails to be sent
        Promise.all(emailPromises)
            .then(() => {
                console.log("All emails have been sent successfully.");

                // MAIL SUCCESS HANDLING CODE START ////////////

               document.getElementById('top_fname').value = "";
               document.getElementById('top_phone').value = "";
               document.getElementById('top_email').value = "";
               // document.getElementById('top_services').value = "";

              document.getElementById('ContactMsg2Up').style.display = "block";
              setTimeout(() => document.getElementById('ContactMsg2Up').style.display = "none", 5000);

               // MAIL SUCCESS HANDLING CODE END ////////////


            })
            .catch((error) => {
                console.error("An error occurred while sending emails:", error);
            });


        return true;

    }
}

document.getElementById('contactform').addEventListener('submit', function (event) { // DECLARE form id. Eg: mainform
    event.preventDefault(); // Prevent the default form submission behavior
    SubmitContDown(); // Call the form submission logic function
});

async function SubmitContDown() {

    let name = document.getElementById('fname').value;
    let phone = document.getElementById('phone').value;
    let email = document.getElementById('email').value;
    // let service = document.getElementById('service').value;
    // let message = document.getElementById('message').value;

    if (name.trim() == "")
        why += "mm";

    if (email.trim() == "" || phone.trim() == "")
        why += "mm";
    else {
        if (!filter.test(email)) {
            why += "mm";
        }
    }

    if (why != "") {
        document.getElementById('ContactMsg1').style.display = "block";
        return false;
    } else {
        document.getElementById('ContactMsg1').style.display = "none";

        const emailAddressesbottom = ["aaryanraj_lotus@outlook.com", "info@dukebizadvisors.com"]; // multiple emails in it
        const Msubject = `Duck Business Advisors `; // REQUIRED VALUE MAIL SUBJECT
        const MailContent = `Full Name: ${name}, Phone Number: ${phone}, Email Address: ${email}`; // REQUIRED VALUE MAIL CONTENT

        //console.log('Value of MailContent:', MailContent);

        // Calling the function and checking its return value
        
        // Iterate over each email address
        emailAddressesbottom.forEach((toAddress) => {
            const emailPromise = MailSend(toAddress, Msubject, MailContent) // Replace "Subject" and "Mail content" with actual subject and content
                .then((result) => {
                    if (result.success) {
                        console.log("Mail sent successfully to", toAddress);
                    } else {
                        console.log("Failed to send mail to", toAddress + ":", result.error);
                        // Your failure handling code here
                    }
                })
                .catch((error) => {
                    console.error("An error occurred while sending mail to", toAddress + ":", error);
                });

                emailAddressesbottom.push(emailPromise);
        });

        // Wait for all emails to be sent
        Promise.all(emailAddressesbottom)
            .then(() => {
                console.log("All emails have been sent successfully.");

                // MAIL SUCCESS HANDLING CODE START ////////////

                document.getElementById('fname').value = "";
                document.getElementById('phone').value = "";
                document.getElementById('email').value = "";
                // document.getElementById('service').value = "";
                // document.getElementById('message').value = "";

              document.getElementById('ContactMsg2').style.display = "block";
              setTimeout(() => document.getElementById('ContactMsg2').style.display = "none", 5000);

               // MAIL SUCCESS HANDLING CODE END ////////////


            })
            .catch((error) => {
                console.error("An error occurred while sending emails:", error);
            });


        return true;
    }
}

var all_scripts = []; 