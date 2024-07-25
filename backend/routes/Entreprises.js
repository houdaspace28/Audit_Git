import express from "express";
import EntrepriseModel from "../models/Entreprise.js";
import connectDB from "../db/connection2.js";

const router = express.Router();

router.get("/:pilier_nom/:nom_entreprise", async (req, res) => {
  const { pilier_nom, nom_entreprise } = req.params;

  try {
    await connectDB();
    const entreprise = await EntrepriseModel.findOne({ nom_entreprise });

    if (!entreprise) {
      return res.status(404).json({ message: "Entreprise not found" });
    }

    res.status(200).json(entreprise);
  } catch (error) {
    console.error("Error retrieving entreprise:", error);
    res.status(500).json({ message: "Server error", error });
  }
});


router.post("/:pilier_nom/:nom_entreprise", async (req, res) => {
  console.log(`Received POST request for entreprise: ${req.params.nom_entreprise}, pilier: ${req.params.pilier_nom}`);
    
    const { nom_entreprise } = req.params;
  
    try {

      await connectDB();
      // Find the entreprise by nom_entreprise
      const entreprise = await EntrepriseModel.findOne({ nom_entreprise });
  
      if (!entreprise) {
        return res.status(404).json({ message: "Entreprise not found" });
      }

      console.log("Entreprise found:", entreprise);
    
      let pilierIndex= -1;
      
      
      switch (req.params.pilier_nom) {
        case "Données":
          pilierIndex = 1;
          
          break;
        case "Reporting":
          pilierIndex = 2;
          
          break;
        case "SiteWeb":
          pilierIndex = 3;
          
          break;
        case "Automatisation":
          pilierIndex = 4;
          
          break;
        case "Messages":
          pilierIndex = 5;
          
          break;
        default:
          return res.status(404).json({ message: "Pilier not found" });

      }

    const choice_qsts = req.body[`choice_qsts_${pilierIndex}`];
    const open_qsts = req.body[`open_qsts_${pilierIndex}`];
    const scores = req.body.scores;

    

    console.log(`choice_qsts_${pilierIndex}:`, choice_qsts);
    console.log(`open_qsts_${pilierIndex}:`, open_qsts);
    console.log(`scores:`, scores);
    


    open_qsts.forEach((answer, index) => {
        if (entreprise[`open_qsts_${pilierIndex}`] && entreprise[`open_qsts_${pilierIndex}`][index]) {
          entreprise[`open_qsts_${pilierIndex}`][index].answer = answer;
        }
      });

      choice_qsts.forEach((answer, index) => {
        if (entreprise[`choice_qsts_${pilierIndex}`] && entreprise[`choice_qsts_${pilierIndex}`][index]) {
          entreprise[`choice_qsts_${pilierIndex}`][index].answer = answer;
        }
      });

      Object.keys(scores).forEach((pilier) => {
        entreprise.scores.set(pilier, scores[pilier]);
      });
    
     
      await entreprise.save();
  
      res.status(200).json({ message: "Data submitted successfully", entreprise });
    } catch (error) {
      console.error("Error saving data:", error);
      res.status(500).json({ message: "Server error", error });
    }
  });

  router.put("/:nom_entreprise/feedbacks", async (req, res) => {
    const { nom_entreprise } = req.params;
    const { feedbacks } = req.body;
  
    try {
      await connectDB();
      const entreprise = await EntrepriseModel.findOne({ nom_entreprise });
      if (!entreprise) {
        return res.status(404).json({ message: "Entreprise not found" });
      }
  
      // Update feedbacks
      Object.keys(feedbacks).forEach((pilier) => {
        entreprise.feedbacks.set(pilier, feedbacks[pilier]);
      });
  
      await entreprise.save();
      res.status(200).json({ message: "Feedbacks updated successfully", entreprise });
    } catch (error) {
      console.error("Error updating feedbacks:", error);
      res.status(500).json({ message: "Server error", error });
    }
  });
  
export default router;




