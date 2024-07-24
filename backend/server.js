import express from "express";
import cors from "cors";
import Piliers from "./routes/Piliers.js";
import Entreprises from "./routes/Entreprises.js";
import connectDB from './db/connection2.js';
import EntrepriseModel from "./models/Entreprise.js";
import Download from "./routes/Download.js";

const PORT = process.env.PORT || 5000;
const app = express();
connectDB();

app.use(cors());
app.use(express.json());
app.use("/audit", Piliers);
app.use("/entreprises", Entreprises);
app.use("/download", Download);


app.post("/",(req,res)=>{
  const {nom_entreprise, nom_ceo, tel, secteur, nombre_emp, site_url} = req.body;
  EntrepriseModel.findOne({nom_entreprise: nom_entreprise}).then(entreprise=>{
    if(entreprise){
      res.send("Entreprise déjà existante").status(400);
    }else{
      EntrepriseModel.create({nom_entreprise: nom_entreprise, nom_ceo: nom_ceo, tel: tel, secteur: secteur, nombre_emp: nombre_emp, site_url: site_url}).then(result=>res.json("Entreprise créée avec succès")).catch(err=>res.json("Erreur de création de l'entreprise").status(500));
      
    }
  })

});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });