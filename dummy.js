try {
    console.log("selam");
    const XLSX = require('xlsx')
    const workbook =XLSX.readFile('excel.xlsx',{cellDates:true});
    const sheet_name_list = workbook.SheetNames;
    var xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[1]]);
    
    // console.dir(xlData,{ maxArrayLength: null });
    xlData.forEach(async (data) => {
    
       
        const takim = new RTakim({
        
            seriNo: data.seriNo,
            tanim: data.tanim,
            siraNo: data.siraNo,
            takimAdeti:data.adet
      
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