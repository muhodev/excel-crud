const TakimListesi = require('../model/TakimListesi')
exports.getTakimListesi = async (req, res) => {

    try {
    
    //    const yachtType = req.query.type == null ? 'normal' :req.query.type;
    //     console.log(yachtType,"type backend");
        const result = await TakimListesi.find({});
        res.json({
            success: true,
            result
        })
    } catch (error) {
        console.log(error);
    }
}
exports.createTakimListesi = async (req, res) => {
    try {

        const takim = new TakimListesi(req.body);
        const result = await takim.save()
        res.json({
            success: true,
            result
        })
       
    } catch (error) {
        console.log(error,error);
        res.json({
            error
        })
    }
}
exports.getTakim = async (req, res) => {
    try {
        const {
            id
        } = req.params;
        console.log(req.params,"paramss")
        const result = await TakimListesi.findById(id)
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

exports.deleteTakim = async (req, res) => {
    try {
        const {
            id
        } = req.params;
        const result = await TakimListesi.findByIdAndRemove(id)
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

exports.updateTakim = async (req, res) => {
    try {
        const updateData = req.body;

        const result = await TakimListesi.findByIdAndUpdate(req.params.id, updateData);
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