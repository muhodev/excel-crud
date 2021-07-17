const TakimTakipListesi = require('../model/TakimTakipListesi')
exports.getTakimTakipListesi = async (req, res) => {

    try {
    
    //    const yachtType = req.query.type == null ? 'normal' :req.query.type;
    //     console.log(yachtType,"type backend");
        const result = await TakimTakipListesi.find({});
        res.json({
            success: true,
            result
        })
    } catch (error) {
        console.log(error);
    }
}
exports.createTakimTakipListesi = async (req, res) => {
    try {

       
        const takim = new TakimTakipListesi(req.body);
        const result = await takim.save()
        res.json({
            success: true,
            result
        })
        // console.log("selam");
        // const XLSX = require('xlsx')
        // const workbook =XLSX.readFile('excelyeni.xlsx',{cellDates:true});
        // const sheet_name_list = workbook.SheetNames;
        // var xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
        
        // console.dir(xlData,{ maxArrayLength: null });
        // xlData.forEach(async (data) => {
        
           
        //     const takim = new TakimTakipListesi({
            
        //         seriNo: data['TAKIM SERİ NO'],
        //         tanim: data['TAKIM TANIMI'],
        //         parcaNo: data['PARÇA NO'],
        //         talepEden: data['TALEP EDEN '],
        //         talepAdeti: data['TALEP ADETİ'],
        //         stoktaKalan: data['STOKTA KALAN'],
        //         talepTarihi: data['TALEP TARİHİ-SAATİ'],
        //         teslimAdeti: data['TESLİM ADETİ'],
        //         teslimTarihi: data['TALEP TARİHİ-SAATİ'],
        //         guncelStok: data['GÜNCEL STOK'],
          
        //   });
        //     //   console.log(takim);
        //   const result = await takim.save()
        //   console.log(result)
        // })
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
exports.getTakimTakip = async (req, res) => {
    try {
        const {
            id
        } = req.params;
        console.log(req.params,"paramss")
        const result = await TakimTakipListesi.findById(id)
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

exports.deleteTakimTakip = async (req, res) => {
    try {
        const {
            id
        } = req.params;
        const result = await TakimTakipListesi.findByIdAndRemove(id)
        res.json({
            success: true,
            result
        })
    } catch (error) {
        res.json({
            success: false,
            message: 'Silinecek bir Takım bulunamadi'
        })
    }
}

exports.updateTakimTakip = async (req, res) => {
    try {
        const updateData = req.body;

        const result = await TakimTakipListesi.findByIdAndUpdate(req.params.id, updateData);
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
        const result = await Yacht.findById(id);

        const billion = 1_000;
        console.log(billion);
       
    } catch (error) {

        res.json({error})

    }
}