import express from "express";
import PilierModel from "../models/Pilier.js"; 
import connectDB from "../db/connection2.js";
import EntrepriseModel from "../models/Entreprise.js";

const router = express.Router();

router.get("/", async (req, res) => {
    await connectDB();
    const piliers = await PilierModel.find({});
    res.status(200).send(piliers);
});

router.get("/:pilierName", async (req, res) => {
    await connectDB();
    const { pilierName } = req.params;
    const pilier = await PilierModel.findOne({ pilier_nom: pilierName });

    if (!pilier) {
        return res.status(404).send("No Pilier Found");
    }
    res.status(200).send(pilier);
});



export default router;
