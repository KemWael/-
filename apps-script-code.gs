// كود Google Apps Script - انسخه بالكامل والصقه في محرر الأكواد
// (Extensions > Apps Script) بعد ما تمسح أي كود موجود فيه افتراضيًا

function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);

  sheet.appendRow([
    data.name,
    data.method,
    data.identifier,
    data.fund,
    data.amount,
    data.date
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({status: "success"}))
    .setMimeType(ContentService.MimeType.JSON);
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({status: "الخدمة شغالة"}))
    .setMimeType(ContentService.MimeType.JSON);
}
