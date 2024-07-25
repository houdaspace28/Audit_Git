import mongoose from "mongoose";

const OpenQuestionSchema = new mongoose.Schema({
    qst_id: {
      type: Number,
      required: true
    },
    qst_content: {
      type: String,
      required: true
    },
    answer: {
      type: String,
      default: ''
    }
  }, { _id: false });

  const ChoiceQuestionSchema = new mongoose.Schema({
    qst_id: {
      type: Number,
      required: true
    },
    qst_content: {
      type: String,
      required: true
    },
    answer: {
      type: Number,
      default: 0 
    }
  }, { _id: false });



  

const EntrepriseSchema = new mongoose.Schema({
    nom_entreprise: String,
    nom_ceo: String,
    tel: String,
    secteur: String,
    nombre_emp: Number,
    site_url: String,
    scores: {
      type: Map,
      of: Number,
      default: {
        "Données": 0,
        "Reporting": 0,
        "SiteWeb": 0,
        "Automatisation": 0,
        "Messages": 0
      }
    },
    feedbacks: {
      type: Map,
      of: String,
      default: {
        "Données": "",
        "Reporting": "",
        "SiteWeb": "",
        "Automatisation": "",
        "Messages": ""
      }
    },
    open_qsts_1:{
     type:[OpenQuestionSchema],
     default:[
         {qst_id:121, qst_content:"Quels sontles angles morts en matière de données ?",answer:""},
         {qst_id:122, qst_content:"Quelles équipes ont accès à quels types d'information ?",answer:""},
         {qst_id:123, qst_content:"Quels types de données critiques pour le marketing, la vente ou le service client restent difficiles à collecter ou partager entre équipes ?",answer:""},
         {qst_id:124, qst_content:"Les données présentent-elles de potentiels conflits ? La multiplicité des sources est-elle en cause, et si oui, est-il possible de les condenser ?",answer:""},
   
        ]
    },
    open_qsts_2:{
        type:[OpenQuestionSchema],
     default:[
         {qst_id:221, qst_content:"Quels types de rapports sont nécessaires pour mesurer le progrès quant aux objectifs du site web ? Etes-vous en mesure de les éditer immédiatement ? Dans le cas contraire, quels sont les éléments manquants ?",answer:""},
         {qst_id:222, qst_content:"De quels types de rapports aimeriez-vous disposer ?",answer:""},
         {qst_id:223, qst_content:"Quel est le temps nécessaire à la création des rapports ? Quels rapports sont plus longs à configurer et pourquoi ?",answer:""},
        ]
    },
    open_qsts_3:{
        type:[OpenQuestionSchema],
        default:[
            {qst_id:321, qst_content:"Quelles sont les principales frictions utilisateurs observées sur votre site web ?",answer:""},
            {qst_id:322, qst_content:"Les clients qui visitent votre site web bénéficient-ils d'une expérience différente de celle des visiteurs et des prospects ? Si ce n'est pas le cas, comment procédierez vous dans une situation idéale ?",answer:""},
            {qst_id:323, qst_content:"Quelles sont les personnes impliquées dans la création d'une page web ? Comment le processus s'organise-t-il ?",answer:""},
            {qst_id:324, qst_content:"Combien de temps faut-il à une personne de votre équipe pour créer une page web ?",answer:""},
           ]
    },
    open_qsts_4:{
        type:[OpenQuestionSchema],
        default:[
            {qst_id:421, qst_content:"L'entreprise dispose d'une stratégie pour désinscrire les leads des listes d'envoi automatiques dès lors qu'ils interagissent avec l'équipe commerciale ?",answer:""},
            {qst_id:422, qst_content:"Comment l'automatisation influence-t-elle le score des leads et la prospection commerciale ? Quels sont les atouts et les faiblesses du système en place dans ce domaine ?",answer:""},
           ]
    },
    open_qsts_5:{
        type:[OpenQuestionSchema],
        default:[
            {qst_id:521, qst_content:"Sur quels canaux les propositions de valeur sont-elles les plus claires, précises et actualiséee ? Quels sont les canaux les plus difficiles à maintenir ?",answer:""},
            {qst_id:522, qst_content:"Comment personnaliseriez-vous vos communications si vous disposiez d'informations complémentaires concernant vos prospects ?",answer:""},
            {qst_id:523, qst_content:"En quoi les messages adressés aux clients diffèrent-ils de ceux visant les prospects ?",answer:""},
           ]
    },
    choice_qsts_1:{
        type: [ChoiceQuestionSchema],
        default:[

            {qst_id:111, qst_content:"Toutes les équipess s'appuient sur les mêmes données pour leurs opérations.",answer:0},
            {qst_id:112, qst_content:"Les données de l'entreprise sont hébergées au sein d'un système unifié et exhaustif.",answer:0},
            {qst_id:113, qst_content:"Il est possible de créer du contenu dynamique à partir des données.",answer:0},
            {qst_id:114, qst_content:"Toutes les équipes s'appuient sur une vue centralisée de l'expérience client.",answer:0},
            {qst_id:115, qst_content:"Toutes les équipes disposent des mêmes données et des mêmes modalités d'accès.",answer:0},
        ]
    },
    choice_qsts_2:{
        type: [ChoiceQuestionSchema],
        default:[
            {qst_id:211, qst_content:"Les équipes sont en mesure de créer des rapports concernant le comportement du site web sans le soutien d'un analyste ni assistance extérieure.",answer:0},
            {qst_id:212, qst_content:"Il est facile de conduire des A/B tests ou des tests adaptifs avec le contenu.",answer:0},
            {qst_id:213, qst_content:"Il est facile d'identifier et de résoudre les problèmes de SEO sur le site web.",answer:0},
            {qst_id:214, qst_content:"Le site web et les communications sont rapidement optimisés en fonction des enseignements tirés du reporting.",answer:0},
            {qst_id:215, qst_content:"Il est possible d'identifier les éléments de contenu qui génèrent le plus de leads ou de revenus pour l'entreprise.",answer:0},
        ]
    },
    choice_qsts_3:{
        type: [ChoiceQuestionSchema],
        default:[
            {qst_id:311, qst_content:"L'équipe marketing peut créer et modifier des pages sans le concours de l'équipe développement.",answer:0},
            {qst_id:312, qst_content:"Le contenu est optimisé pour la recherche.",answer:0},
            {qst_id:313, qst_content:"Le contenu est conforme aux  meilleures pratiques en matière d'accessibilité.",answer:0},
            {qst_id:314, qst_content:"Le contenu est facilement personnalisable à partir des données du CRM.",answer:0},
            {qst_id:315, qst_content:"L'expérience web offerte par la marque est cohérente d'un appareil, d'une page et d'un point de contact à l'autre.",answer:0},
        ]
    },
    choice_qsts_4:{
        type: [ChoiceQuestionSchema],
        default:[
            {qst_id:411, qst_content:"Il est possible de créer des automatisations basées sur le comportement des visiteurs du site web.",answer:0},
            {qst_id:412, qst_content:"Il est facile d'intégrer de nouveaux outils et plateformes aux automatisations existantes.",answer:0},
            {qst_id:413, qst_content:"Les automatisations en place sont efficaces pour différentes équipes.",answer:0},
            {qst_id:414, qst_content:"Les mises à jour du contenu peuvent être automatisées ou programmées à l'avance.",answer:0},
            {qst_id:415, qst_content:"L'entreprise dispose d'une stratégie pour désinscrire les leads des listes d'envoi automatiques dès lors qu'ils interagissent avec l'équipe commerciale.",answer:0},
        ]
    },
    choice_qsts_5:{
        type: [ChoiceQuestionSchema],
        default:[
            {qst_id:511, qst_content:"Les communications sont cohérentes et intégrées de manière transversale entre les emails et le site web .",answer:0},
            {qst_id:512, qst_content:"La fonctionnalité de chat du site web représente un levier de développement commercial et d'information clé.",answer:0},
            {qst_id:513, qst_content:"Le message de la marque et le positionnement des produits est uniforme d'un canal publicitaire et d'un réseau social à l'autre.",answer:0},
            {qst_id:514, qst_content:"Les équipes marketing, commerciale et de service client positionnent les produits de la même manière en adoptant un langage commun.",answer:0},
            {qst_id:515, qst_content:"Les visiteurs ont accès à du contenu personnalisé en fonction des informations de la fiche de contact.",answer:0},
        ]
    }
});

const EntrepriseModel= mongoose.model("Entreprise", EntrepriseSchema);

export default EntrepriseModel;