// // var gl = (1,eval)('this');
// // gl.kw = () => alert(2);
// function ka() {
//     alert("JS enabled");
//     // cadesplugin.then(function () {
//     //     Common_CheckForPlugIn();
//     // });
//     // let certList;
//     include_async_code().then(function(){
//         try {
//             var oStore = yield cadesplugin.CreateObjectAsync("CAdESCOM.Store");
//             yield oStore.Open();
//         } catch (err) {
//             alert('Certificate not found');
//             return;
//         }
//         var CAPICOM_CERTIFICATE_FIND_SHA1_HASH = 0;
//         var all_certs = yield oStore.Certificates;
//         var oCerts = yield all_certs.Find(CAPICOM_CERTIFICATE_FIND_SHA1_HASH, thumbprint);
//         var certificate = yield oCerts.Item(1);
//         return certificate;
//     });
//
// }
//
// function GetCertList_Async(lstId) {
//     cadesplugin.async_spawn(function *() {
//         try {
//             var oStore = yield cadesplugin.CreateObjectAsync("CAdESCOM.Store");
//             if (!oStore) {
//                 alert("store failed");
//                 return;
//             }
//
//             yield oStore.Open();
//         }
//         catch (ex) {
//             alert("Certificate not found");
//             return;
//         }
//
//         var lst = document.getElementById(lstId);
//         if(!lst)
//         {
//             return;
//         }
//         var certCnt;
//         var certs;
//
//         try {
//             certs = yield oStore.Certificates;
//             certCnt = yield certs.Count;
//         }
//         catch (ex) {
//             var errormes = document.getElementById("boxdiv").style.display = '';
//             return;
//         }
//
//         if(certCnt == 0)
//         {
//             var errormes = document.getElementById("boxdiv").style.display = '';
//             return;
//         }
//
//         for (var i = 1; i <= certCnt; i++) {
//             var cert;
//             try {
//                 cert = yield certs.Item(i);
//             }
//             catch (ex) {
//                 alert("Ошибка при перечислении сертификатов: " + cadesplugin.getLastError(ex));
//                 return;
//             }
//
//             var oOpt = document.createElement("OPTION");
//             var dateObj = new Date();
//             try {
//                 var ValidToDate = new Date((yield cert.ValidToDate));
//                 var ValidFromDate = new Date((yield cert.ValidFromDate));
//                 var Validator = yield cert.IsValid();
//                 var IsValid = yield Validator.Result;
//                 if(dateObj< ValidToDate && (yield cert.HasPrivateKey()) && IsValid) {
//                     oOpt.text = new CertificateAdjuster().GetCertInfoString(yield cert.SubjectName, ValidFromDate);
//                 }
//                 else {
//                     continue;
//                 }
//             }
//             catch (ex) {
//                 alert("Ошибка при получении свойства SubjectName: " + cadesplugin.getLastError(ex));
//             }
//             try {
//                 oOpt.value = yield cert.Thumbprint;
//             }
//             catch (ex) {
//                 alert("Ошибка при получении свойства Thumbprint: " + cadesplugin.getLastError(ex));
//             }
//
//             lst.options.add(oOpt);
//         }
//
//         yield oStore.Close();
//     });//cadesplugin.async_spawn
// }
// //