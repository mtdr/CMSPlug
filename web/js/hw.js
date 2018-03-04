function getCertHW() {
    try {
        var oStore = cadesplugin.CreateObject("CAdESCOM.Store");
        oStore.Open();
    } catch (err) {
        alert('Certificate not found');
        return;
    }
    // oStore.Open(CAPICOM_CURRENT_USER_STORE, CAPICOM_MY_STORE,
    //     CAPICOM_STORE_OPEN_MAXIMUM_ALLOWED);

    var oCertificates = oStore.Certificates.Find(
        CAPICOM_CERTIFICATE_FIND_SUBJECT_NAME, certSubjectName);
    if (oCertificates.Count == 0) {
        alert("Certificate not found: " + certSubjectName);
        return;
    }
    return oCertificates.Count;
}