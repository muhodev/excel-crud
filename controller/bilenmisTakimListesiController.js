const BilenmisTakimListesi = require('../model/BilenmisTakimListesi')
exports.getBilenmisTakimListesi = async (req, res) => {

    try {
    
    //    const yachtType = req.query.type == null ? 'normal' :req.query.type;
    //     console.log(yachtType,"type backend");
        const result = await BilenmisTakimListesi.find({});
        res.json({
            success: true,
            result
        })
    } catch (error) {
        console.log(error);
    }
}
exports.createBilenmisTakim = async (req, res) => {
    try {
        console.log("selam");
        const XLSX = require('xlsx')
        const workbook =XLSX.readFile('excel.xlsx',{cellDates:true});
        const sheet_name_list = workbook.SheetNames;
        var xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[2]]);
        
        // console.dir(xlData,{ maxArrayLength: null });
        xlData.forEach(async (data) => {
        
           
            const takim = new BilenmisTakimListesi({
            
                seriNo: data['Takım  Seri No'],
                tanim: data['TAKIM TANIMI'],
                bilemeOrKirilma: data['BİLEME Mİ?/KIRILMA MI?'],
                operator: data['İLGİLİ OPERATÖR'],
                toplamAdet: data['TOPLAM ADET'],
                gonderilenAdet: data['GÖNDERİLEN ADET'],
                kalan: data['KALAN'],
                gelisTarihi: data['GELİŞ TARİHİ'],
                guncelStok: data['GÜNCEL STOK'],
          
          });
            //   console.log(takim);
          const result = await takim.save()
          console.log(result)
        })
        // res.json({
        //     success: true,
        //     xlData
        // })
    } catch (error) {
        console.log(error,error);
        res.json({
            error
        })
    }
}
exports.getBilenmisTakim = async (req, res) => {
    try {
        const {
            id
        } = req.params;
        console.log(req.params,"paramss")
        const result = await BilenmisTakimListesi.findById(id)
        res.json({
            success: true,
            result
        })
    } catch (error) {
        res.json({
            error
        })
    }
}

exports.deleteBilenmisTakim = async (req, res) => {
    try {
        const {
            id
        } = req.params;
        const result = await BilenmisTakimListesi.findByIdAndRemove(id)
        res.json({
            success: true,
            result
        })
    } catch (error) {
        res.json({
            success: false,
            message: 'Silinecek bir Yacht bulunamadi'
        })
    }
}

exports.updateBilenmisTakim = async (req, res) => {
    try {
        const updateData = req.body;

        const result = await BilenmisTakimListesi.findByIdAndUpdate(req.params.id, updateData);
        res.json({
            result
        })

    } catch (error) {
        res.json({
            error
        })
    }
}

exports.modifyYacht = async (req, res) => {
    try {
      
       const result2 =  [1, 2, [3, 4]].flat(Infinity); // [1, 2, 3, 4]
        const id = req.params.id;
        const insertData = req.body;
        const newCustomer = req.body;
        // const result = await Yacht.findByIdAndUpdate(id,{
        //     $push:insertData
        // })

        // res.json({result})
        const result = await BilenmisTakimListesi.findById(id);

        const billion = 1_000;
        console.log(billion);
       
    } catch (error) {

        res.json({error})

    }
}