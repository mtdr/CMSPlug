var CADESCOM_CADES_BES = 1;
var CAPICOM_CURRENT_USER_STORE = 2;
var CAPICOM_MY_STORE = "My";
var CAPICOM_STORE_OPEN_MAXIMUM_ALLOWED = 2;
var CAPICOM_CERTIFICATE_FIND_SUBJECT_NAME = 1;
var CADESCOM_BASE64_TO_BINARY = 1;


function SignCreate(certSubjectName, dataToSign) {
    var oStore = cadesplugin.CreateObject("CAdESCOM.Store");
    oStore.Open(CAPICOM_CURRENT_USER_STORE, CAPICOM_MY_STORE,
        CAPICOM_STORE_OPEN_MAXIMUM_ALLOWED);

    var oCertificates = oStore.Certificates.Find(
        CAPICOM_CERTIFICATE_FIND_SUBJECT_NAME, certSubjectName);
    if (oCertificates.Count == 0) {
        alert("Certificate not found: " + certSubjectName);
        return;
    }
    var oCertificate = oCertificates.Item(1);
    var oSigner = cadesplugin.CreateObject("CAdESCOM.CPSigner");
    oSigner.Certificate = oCertificate;

    var oSignedData = cadesplugin.CreateObject("CAdESCOM.CadesSignedData");
    // Значение свойства ContentEncoding должно быть задано
    // до заполнения свойства Content
    oSignedData.ContentEncoding = CADESCOM_BASE64_TO_BINARY;
    oSignedData.Content = dataToSign;

    var sSignedMessage = "";
    try {
        sSignedMessage = oSignedData.SignCades(oSigner, CADESCOM_CADES_BES, true);
    } catch (err) {
        alert("Failed to create signature. Error: " + cadesplugin.getLastError(err));
        return;
    }

    oStore.Close();

    return sSignedMessage;
}

function Verify(sSignedMessage, dataToVerify) {
    var oSignedData = cadesplugin.CreateObject("CAdESCOM.CadesSignedData");
    try {
        // Значение свойства ContentEncoding должно быть задано
        // до заполнения свойства Content
        oSignedData.ContentEncoding = CADESCOM_BASE64_TO_BINARY;
        oSignedData.Content = dataToVerify;
        oSignedData.VerifyCades(sSignedMessage, CADESCOM_CADES_BES, true);
    } catch (err) {
        alert("Failed to verify signature. Error: " + cadesplugin.getLastError(err));
        return false;
    }

    return true;
}

function run() {
    // var oCertName = document.getElementById("CertName");
    // var sCertName = oCertName.value; // Здесь следует заполнить SubjectName сертификата
    var sCertName = "Paul"; // Здесь следует заполнить SubjectName сертификата
    if ("" == sCertName) {
        alert("Введите имя сертификата (CN).");
        return;
    }
    // Предварительно закодированные в BASE64 бинарные данные
    // В данном случае закодирована строка "Some Data."
    var dataInBase64 = "U29tZSBEYXRhLg==";

    // Подписаны будут исходные бинарные данные (в данном случае - "Some Data.")
    // Такая подпись должна проверяться в КриптоАРМ и cryptcp.exe
    var signedMessage = SignCreate(sCertName, dataInBase64);

    document.getElementById("signature").innerHTML = signedMessage;

    var verifyResult = Verify(signedMessage, dataInBase64);
    if (verifyResult) {
        alert("Signature verified");
    }
}