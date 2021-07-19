const express = require('express');
const cors = require('cors');
const takimListesiRouter = require('./routes/takimListesiRoutes')
const takimTakipListesiRouter = require('./routes/takimTakipListesiRoutes')
const bilenmisTakimListesiRouter = require('./routes/bilenmisTakimListesiRoutes')
const kullanilmisTakimRouter = require('./routes/kullanilmisTakimRoutes')
const rTakimRouter = require('./routes/rTakimRoutes')
const tCakiTakimRouter = require('./routes/tCakiTakimRoutes')
const bilenecekTakimRouter = require('./routes/bilenecekTakimRoutes')
const bilenecekMatkapRouter = require('./routes/bilenecekMatkapRoutes')
const page2Router = require('./routes/page2Routes')
const freezeTakimListesiRouter = require('./routes/freezeTakimListesiRoutes')
const taramalarVeUclarRouter = require('./routes/taramalarVeUclarRoutes')
const parmakFreezeRouter = require('./routes/parmakFreezeRoutes')

const page3BilenmisTakimRouter = require('./routes/page3BilenmisTakimRoutes')
const page3KlavuzRouter = require('./routes/page3KlavuzRoutes')
const page3RaybaRouter = require('./routes/page3RaybaRoutes')
const page4Router = require('./routes/page4Routes')
const authRouter = require('./routes/authRoutes')

const auth = require('./verifyToken')
const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/v1/auth',authRouter)
app.use('/api/v1/takim-takip-listesi',auth,takimTakipListesiRouter)

app.use('/api/v1/takim-listesi',auth,takimListesiRouter)
app.use('/api/v1/bilenmis-takim-listesi',auth,bilenmisTakimListesiRouter)
app.use('/api/v1/kullanilmis-takim-listesi',auth,kullanilmisTakimRouter)
app.use('/api/v1/r-takim-listesi',auth,rTakimRouter)
app.use('/api/v1/t-caki-takim-listesi',auth,tCakiTakimRouter)
app.use('/api/v1/bilenecek-takim',auth,bilenecekTakimRouter)
app.use('/api/v1/bilenecek-matkap',auth,bilenecekMatkapRouter)
app.use('/api/v1/page-2',auth,page2Router)
app.use('/api/v1/freeze-takim-listesi',auth,freezeTakimListesiRouter)
app.use('/api/v1/taramalar-ve-uclar',auth,taramalarVeUclarRouter)
app.use('/api/v1/parmak-freeze',auth,parmakFreezeRouter)
app.use('/api/v1/page3-bilenmis-takim',auth,page3BilenmisTakimRouter)
app.use('/api/v1/page3-klavuz',auth,page3KlavuzRouter)
app.use('/api/v1/page3-rayba',auth,page3RaybaRouter)
app.use('/api/v1/page4',auth,page4Router)


module.exports = app;
