var XLSX = require('xlsx')
var workbook = XLSX.readFile('excel.xlsx',{cellDates:true});
var sheet_name_list = workbook.SheetNames;

var xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
console.dir(xlData,{ maxArrayLength: null });

// xlData.forEach((data) => {
//     console.log({
//         seriNo: data['TAKIM SERİ NO'],
//         tanim: data['TAKIM TANIMI'],
//         parcaNo: data['PARÇA NO'],
//         talepEden: data['TALEP EDEN '],
//         talepAdeti: data['TOPLAM ADET'],
//         stoktaKalan: data['TALEP ADETİ'],
//         talepTarihi: data['TAKIM SERİ NO'],
//         teslimAdeti: data['STOKTA KALAN'],
//         teslimTarihi: data['TALEP TARİHİ-SAATİ'],
//         guncelStok: data['GÜNCEL STOK'],
//     },"data")
// })