function convertFile() {
    // Select the very first file from list
    var fileToLoad = document.querySelector('input').files[0];
    // FileReader function for read the file.
    var fileReader = new FileReader();
    var base64;
    // Onload of file read the file content
    fileReader.onload = function (fileLoadedEvent) {
        base64 = fileLoadedEvent.target.result;
        // Print data in console
        console.log(base64);
        document.getElementById("DataToSignTxtBox").innerHTML =
            base64.substring(base64.indexOf(",") + 1, base64.toString().length);

        // mainFunc(base64.substring(base64.indexOf(",")+1, base64.toString().length))

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
        fileReader.onload = function (fileLoadedEvent) {
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

// Function to download data to a file
function download(data, filename, type) {
    var file = new Blob([data], {type: type});
    if (window.navigator.msSaveOrOpenBlob) // IE10+
        window.navigator.msSaveOrOpenBlob(file, filename);
    else { // Others
        var a = document.createElement("a"),
            url = URL.createObjectURL(file);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(function() {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
        }, 0);
    }
}

function download2(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

