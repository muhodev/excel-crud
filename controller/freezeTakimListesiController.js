const FreezeTakimListesi = require('../model/FreezeTakimListesi')
exports.getBilenmisTakimListesi = async (req, res) => {

    try {
    
    //    const yachtType = req.query.type == null ? 'normal' :req.query.type;
    //     console.log(yachtType,"type backend");
        const result = await FreezeTakimListesi.find({});
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
        var xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
        
        // console.dir(xlData,{ maxArrayLength: null });
        xlData.forEach(async (data) => {
        
           
            const takim = new FreezeTakimListesi({
            
                seriNo: data.seriNo,
                tanim: data.tanim,
                siraNo: data.siraNo,
                takimAdeti:data.takimAdeti
          
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
        const result = await FreezeTakimListesi.findById(id)
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
        const result = await FreezeTakimListesi.findByIdAndRemove(id)
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

        const result = await FreezeTakimListesi.findByIdAndUpdate(req.params.id, updateData);
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
        const result = await FreezeTakimListesi.findById(id);

        const billion = 1_000;
        console.log(billion);
       
    } catch (error) {

        res.json({error})

    }
}