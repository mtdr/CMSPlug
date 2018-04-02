function convertFile() {
    // Select the very first file from list
    var fileToLoad = document.querySelector('input').files[0];
    // FileReader function for read the file.
    var fileReader = new FileReader();
    var base64;
    // Onload of file read the file content
    fileReader.onload = function(fileLoadedEvent) {
        base64 = fileLoadedEvent.target.result;
        // Print data in console
        console.log(base64);
        mainFunc(base64.substring(0, base64.indexOf(",")))

    };
    // Convert data to base64
    fileReader.readAsDataURL(fileToLoad);
}

function convertToBase64() {
    //Read File

    var selectedFile = document.querySelector('input').files[0];

    //Check File is not Empty
    if (selectedFile.length > 0) {
        // Select the very first file from list
        var fileToLoad = selectedFile[0];
        // FileReader function for read the file.
        var fileReader = new FileReader();
        var base64;
        // Onload of file read the file content
        fileReader.onload = function(fileLoadedEvent) {
            base64 = fileLoadedEvent.target.result;
            // Print data in console
            console.log(base64);
        };
        // Convert data to base64
        fileReader.readAsDataURL(fileToLoad);
    }
}

// function getCertHW() {
//     try {
//         var oStore = cadesplugin.CreateObject("CAdESCOM.Store");
//         oStore.Open();
//     } catch (err) {
//         alert('Certificate not found');
//         return;
//     }
//     // oStore.Open(CAPICOM_CURRENT_USER_STORE, CAPICOM_MY_STORE,
//     //     CAPICOM_STORE_OPEN_MAXIMUM_ALLOWED);
//
//     var oCertificates = oStore.Certificates.Find(
//         CAPICOM_CERTIFICATE_FIND_SUBJECT_NAME, certSubjectName);
//     if (oCertificates.Count == 0) {
//         alert("Certificate not found: " + certSubjectName);
//         return;
//     }
//     return oCertificates.Count;
// }
//
