import {Router} from 'express';
import ProvinceRepository from '../repositories/province-repository.js';
import ProvinceService from './../services/province-service.js'
import ValidacionesHelper from '../helpers/validaciones-helper.js'
import { Province,provincias_argentinas } from '../entities/province.js';
const router = Router();
const svc = new ProvinceService(); // Instanciación del Service.
const port = 3000;

//app.use("/api/province", ProvinceRouter);

router.get('/api/province', (req, res) => { 
    res.status(200).send(provincias_argentinas);
})

router.get('/api/province/id', async(req, res)=> { 
    let ID = req.query.id;
    let provin = provincias_argentinas.find((element) => element.id == ID);
    if (provin == undefined) res.status(400).send("NO SE ENCONTRÓ");
    else res.status(200).send(provin);
})
router.post('/api/province', (req, res) => { 
    let id = provincias_argentinas[provincias_argentinas.length-1].id + 1;
    let name = ValidacionesHelper.getStringOrDefault(req.body.name,undefined);
    let full_name = ValidacionesHelper.getStringOrDefault(req.body.full_name,undefined);
    let latitude = ValidacionesHelper.getIntegerOrDefault(req.body.latitude,undefined);
    let longitude = ValidacionesHelper.getIntegerOrDefault(req.body.longitude,undefined);
    let display_order = ValidacionesHelper.getIntegerOrDefault(req.body.display_order,undefined);
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
router.put('/api/province', (req, res) => { 
    let Id = req.body.id;
    let Name = ValidacionesHelper.getStringOrDefault(req.body.name,undefined);
    let Full_name = ValidacionesHelper.getStringOrDefault(req.body.full_name,undefined);
    let Latitude = ValidacionesHelper.getIntegerOrDefault(req.body.latitude,undefined);
    let Longitude = ValidacionesHelper.getIntegerOrDefault(req.body.longitude,undefined);
    let Display_order = ValidacionesHelper.getIntegerOrDefault(req.body.display_order,undefined);
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
router.delete('/api/province/id', (req, res) => { 
    let Id = req.query.id;
    let Provin = provincias_argentinas.find((element) => element.id == Id);
    if (Provin == undefined) res.status(404).send("NO SE ENCONTRÓ");
    else{
        let pos = provincias_argentinas.findIndex((element) => element.id == Id);
        provincias_argentinas.splice([pos],1);
        res.status(200).send("OK");
    }
})
export default router;