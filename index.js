import express from "express";
import cors from "cors";
import validacionesHelper from "./src/modules/validaciones-helper.js";
import datetimeHelper from "./src/modules/datetime-helper.js";
//import { redirect } from "express/lib/response.js";
-datetimeHelper
//import ProvinceRouter from "./src/controllers/province-controller.js"
let provincias_argentinas = [
    {
        "id": 1,
        "name": "Buenos Aires",
        "full_name": "Provincia de Buenos Aires",
        "latitude": -36.6769,
        "longitude": -60.5588,
        "display_order": 1
    },
    {
        "id": 2,
        "name": "Córdoba",
        "full_name": "Provincia de Córdoba",
        "latitude": -31.4201,
        "longitude": -64.1888,
        "display_order": 2
    }
]
const app = express();
const port = 3000; 
app.use(cors()); 
app.use(express.json()); 

//app.use("/api/province", ProvinceRouter);

app.get('/api/province', (req, res) => { 
    res.status(200).send(provincias_argentinas);
})

app.get('/api/province/id', async(req, res)=> { 
    let ID = req.query.id;
    let provin = provincias_argentinas.find((element) => element.id == ID);
    if (provin == undefined) res.status(400).send("NO SE ENCONTRÓ");
    else res.status(200).send(provin);
})
app.post('/api/province', (req, res) => { 
    let id = provincias_argentinas[provincias_argentinas.length-1].id + 1;
    let name = validacionesHelper.getStringOrDefault(req.body.name,undefined);
    let full_name = validacionesHelper.getStringOrDefault(req.body.full_name,undefined);
    let latitude = validacionesHelper.getIntegerOrDefault(req.body.latitude,undefined);
    let longitude = validacionesHelper.getIntegerOrDefault(req.body.longitude,undefined);
    let display_order = validacionesHelper.getIntegerOrDefault(req.body.display_order,undefined);
    if(id == undefined || name == undefined || full_name == undefined || latitude == undefined || longitude == undefined || display_order == undefined) res.status(400).send("PASA BIEN LOS PARAMETROS ");
    else{
        provincias_argentinas.push({
            "id":id, 
            "name":name, 
            "full_name": full_name, 
            "latitude": latitude,
            "longitude": longitude, 
            "display_order": display_order
        });
        res.status(201).send("created");  
    }
})
app.put('/api/province', (req, res) => { 
    let Id = req.body.id;
    let Name = validacionesHelper.getStringOrDefault(req.body.name,undefined);
    let Full_name = validacionesHelper.getStringOrDefault(req.body.full_name,undefined);
    let Latitude = validacionesHelper.getIntegerOrDefault(req.body.latitude,undefined);
    let Longitude = validacionesHelper.getIntegerOrDefault(req.body.longitude,undefined);
    let Display_order = validacionesHelper.getIntegerOrDefault(req.body.display_order,undefined);
    let Provin = provincias_argentinas.find((element) => element.id == Id);
    if (Provin == undefined) res.status(404).send("NO SE ENCONTRÓ");
    if(Id == undefined || Name == undefined || Full_name == undefined || Latitude == undefined || Longitude == undefined || Display_order == undefined) res.status(400).send("PASA BIEN LOS PARAMETROS ");
    else {
      let pos = provincias_argentinas.findIndex((element) => element.id == Id);
      provincias_argentinas[pos].name = Name;
      provincias_argentinas[pos].full_name = Full_name;
      provincias_argentinas[pos].latitude = Latitude;
      provincias_argentinas[pos].longitude = Longitude;
      provincias_argentinas[pos].display_order = Display_order;
      res.status(201).send("created");
    }
})
app.delete('/api/province/id', (req, res) => { 
    let Id = req.query.id;
    let Provin = provincias_argentinas.find((element) => element.id == Id);
    if (Provin == undefined) res.status(404).send("NO SE ENCONTRÓ");
    else{
        let pos = provincias_argentinas.findIndex((element) => element.id == Id);
        provincias_argentinas.splice([pos],1);
        res.status(200).send("OK");
    }
})
app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
})
