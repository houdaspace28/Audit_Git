import express from "express";
import EntrepriseModel from "../models/Entreprise.js";
import connectDB from "../db/connection2.js";
import PDFDocument from "pdfkit";
import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url';

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


router.get("/:nom_entreprise", async (req, res) => {
    const { nom_entreprise } = req.params;

    try {
      await connectDB();
      const entreprise = await EntrepriseModel.findOne({ nom_entreprise });
  
      if (!entreprise) {
        return res.status(404).json({ message: "Entreprise not found" });
      }

      const doc = new PDFDocument();
      const filePath = path.resolve(__dirname, '../pdfs', `${entreprise.nom_entreprise}_audit.pdf`);
      const writeStream = fs.createWriteStream(filePath);
      doc.pipe(writeStream);

      doc.info.Title = `Audit de l'expérience digitale de ${entreprise.nom_entreprise}`;
      doc.info.Author = 'LeadRogen';
      doc.fontSize(12);

      function addHeader(date, title) {
        doc.fontSize(15).text(date, { align: 'right' });
        doc.moveDown(2);
        doc.fontSize(25).text(title, { align: 'center' });
        doc.moveDown(2);
      }
      
      
      function addFooter(website) {
        doc.fontSize(10).text(`Visitez: ${website}`, { align: 'center', link: website });
      }

      
      const today = new Date().toLocaleDateString('fr-FR');
      addHeader(today, `Audit de l'expérience digitale de ${entreprise.nom_entreprise}`);
      addFooter("https://leadrogen.com/");


      doc.addPage();
      doc.fontSize(20).text("Coordonnées de l'entreprise", { align: 'center' });
      doc.moveDown(2);
      doc.fontSize(15).text(`Nom de l'entreprise: ${entreprise.nom_entreprise}`);
      doc.fontSize(15).text(`Site de l'entreprise: ${entreprise.site_url}`);
      doc.fontSize(15).text(`Secteur d'activité: ${entreprise.secteur}`);
      doc.fontSize(15).text(`Nombre d'employés: ${entreprise.nombre_emp}`);
      
      const piliers = ["Données", "Reporting", "Site Web", "Automatisation", "Messages"];
      for (let i = 0; i < 5; i++) {
      doc.addPage();
      addHeader(today, `Pilier ${i + 1} : ${piliers[i]}`);
      doc.moveDown(2);
      doc.fontSize(20).text("Questions d'évaluation:");
      doc.fontSize(10).text('La réponse varie de 1 à 5, 5 étant le plus favorable.');
      doc.moveDown(1);

 
    if (entreprise[`choice_qsts_${i + 1}`]) {
      entreprise[`choice_qsts_${i + 1}`].forEach((qst) => {
      doc.fontSize(15).text(`${qst.qst_id}`);
      doc.fontSize(15).text(`${qst.qst_content}`, { indent: 20 });
      doc.fontSize(15).text(`Réponse: ${qst.answer}`, { indent: 20 });
      doc.moveDown(0.5);
    });
  } else {
    doc.text('Pas de questions disponibles', { indent: 20 });
  }

     doc.moveDown(1);
     doc.fontSize(20).text("Questions ouvertes:");
     doc.moveDown(1);

  
  if (entreprise[`open_qsts_${i + 1}`]) {
    entreprise[`open_qsts_${i + 1}`].forEach((qst) => {
      doc.fontSize(15).text(`${qst.qst_id}`);
      doc.fontSize(15).text(`${qst.qst_content}`, { indent: 20 });
      doc.fontSize(15).text(`Réponse: ${qst.answer}`, { indent: 20 });
      doc.moveDown(0.5);
    });
  } else {
    doc.text('Pas de questions disponibles', { indent: 20 });
  }

  doc.moveDown(1);
  

  const score = entreprise?.scores[i]?.score_value || 'Non disponible';
  const feedback = entreprise?.feedbacks[i]?.feedback_value || 'Non disponible';
  doc.fontSize(20).text(`Votre score en ce pilier: ${score}`);
  doc.moveDown(0.5);
  doc.fontSize(20).text(`Notre feedback sur ce pilier: ${feedback}`);
}
      doc.end();
      writeStream.on('finish', () => {
        res.setHeader('Content-Type', 'application/pdf');
            res.setHeader('Content-Disposition', `attachment; filename=${entreprise.nom_entreprise}_audit.pdf`);
            res.download(filePath, `${entreprise.nom_entreprise}_audit.pdf`, (err) => {
                if (err) {
                    console.error(err);
                    res.status(500).send('Could not download file');
                }
            });
        });
    }catch(error){
        console.log(error);
        res.status(500).send('Internal Server Error');
    }
});

export default router;