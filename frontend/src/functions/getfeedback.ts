export function getCorrectFeedback(score: number, pilier: string) {
    if(score>=20) return "Vous faites un bon travail. Veillez à optimiser l'expérience digitale en continu pour améliorer le score dans la durée.";
    else if(score>=13 && score<20) {
      switch(pilier)
          {
            case "Données": return "Vous vous rapprochez du but, mais ce pilier n'est pas encore conforme aux meilleures pratiques. Des scores insuffisants nécessitent d'examiner le stockage des données. Il faut déterminer où elles sont hébergées et si elles sont dispersées entre différentes plateformes. L'objectif est de regrouper toutes les données clients sur une seule plateforme, en impliquant les équipes dans une démarche progressive vers la consolidation.";
  
            case "Reporting": return "Vous vous rapprochez du but, mais ce pilier n'est pas encore conforme aux meilleures pratiques. Des scores insuffisants nécessitent de vérifier la pertinence du reporting. Configurez des rapports prédéfinis pour analyser rapidement les performances et ajuster votre stratégie digitale. Créez des rapports d'attribution liant les activités de marketing aux résultats commerciaux, et effectuez des A/B tests sur les pages clés pour collecter des données de référence.";
  
            case "SiteWeb": return "Vous vous rapprochez du but, mais ce pilier n'est pas encore conforme aux meilleures pratiques. Des scores insuffisants nécessitent d'améliorer l'expérience utilisateur et la gestion du site. Assurez-vous que le site est facile à utiliser pour vos équipes en formant les profils non techniques à l'interface du CMS. Analysez votre CRM pour mieux connaître votre clientèle et identifiez les contenus qui les intéressent. Apportez des modifications graduelles pour aligner le site sur les attentes des utilisateurs, en intégrant des points de conversion sur les pages à fort trafic et en créant du contenu sur mesure. Testez la compatibilité des pages sur différents appareils et dressez une liste des optimisations nécessaires.";
  
            case "Automatisation": return "Vous vous rapprochez du but, mais ce pilier n'est pas encore conforme aux meilleures pratiques. Des scores insuffisants nécessitent d'examiner la stratégie omnicanale. Il est crucial de centraliser les informations des leads dans le CRM, en automatisant des actions comme l'envoi d'e-mails après des téléchargements ou soumissions de formulaires. Configurez des workflows pour suivre les actions des contacts et notifier les responsables des ventes lorsque des leads atteignent un certain seuil. Assurez-vous que les automatisations sont claires et à jour pour éviter les erreurs et aligner les objectifs de l’équipe. Éliminez les workflows obsolètes pour optimiser votre marketing.";
  
            case "Messages": return "Vous vous rapprochez du but, mais ce pilier n'est pas encore conforme aux meilleures pratiques. Des scores insuffisants nécessitent de consolider les communications et d'étendre les capacités. Examinez tous les points de contact du cycle de vie des leads pour assurer une cohérence dans les messages. Rédigez une documentation pour guider les équipes si des disparités apparaissent. Analysez les données du CRM pour identifier des tendances sectorielles et assurez-vous que vos communications sont pertinentes. Intégrez du contenu intelligent pour personnaliser les messages en fonction des propriétés des contacts et ainsi individualiser les communications à grande échelle.";
  
            default: return "Vous vous rapprochez du but, mais ce pilier n'est pas encore conforme aux meilleures pratiques.";
  
          }
    }
    else {
      switch(pilier)
      {
        case "Données": return "Ce pilier représente une entrave significative s'agissant de répondre aux attentes des clients. Des scores insuffisants nécessitent d'examiner le stockage des données. Il faut déterminer où elles sont hébergées et si elles sont dispersées entre différentes plateformes. L'objectif est de regrouper toutes les données clients sur une seule plateforme, en impliquant les équipes dans une démarche progressive vers la consolidation.";
  
        case "Reporting": return "Ce pilier représente une entrave significative s'agissant de répondre aux attentes des clients. Des scores insuffisants nécessitent de vérifier la pertinence du reporting. Configurez des rapports prédéfinis pour analyser rapidement les performances et ajuster votre stratégie digitale. Créez des rapports d'attribution liant les activités de marketing aux résultats commerciaux, et effectuez des A/B tests sur les pages clés pour collecter des données de référence.";
  
        case "SiteWeb": return "Ce pilier représente une entrave significative s'agissant de répondre aux attentes des clients. Des scores insuffisants nécessitent d'améliorer l'expérience utilisateur et la gestion du site. Assurez-vous que le site est facile à utiliser pour vos équipes en formant les profils non techniques à l'interface du CMS. Analysez votre CRM pour mieux connaître votre clientèle et identifiez les contenus qui les intéressent. Apportez des modifications graduelles pour aligner le site sur les attentes des utilisateurs, en intégrant des points de conversion sur les pages à fort trafic et en créant du contenu sur mesure. Testez la compatibilité des pages sur différents appareils et dressez une liste des optimisations nécessaires.";
  
        case "Automatisation": return "Ce pilier représente une entrave significative s'agissant de répondre aux attentes des clients. Des scores insuffisants nécessitent d'examiner la stratégie omnicanale. Il est crucial de centraliser les informations des leads dans le CRM, en automatisant des actions comme l'envoi d'e-mails après des téléchargements ou soumissions de formulaires. Configurez des workflows pour suivre les actions des contacts et notifier les responsables des ventes lorsque des leads atteignent un certain seuil. Assurez-vous que les automatisations sont claires et à jour pour éviter les erreurs et aligner les objectifs de l’équipe. Éliminez les workflows obsolètes pour optimiser votre marketing.";
  
        case "Messages": return "Ce pilier représente une entrave significative s'agissant de répondre aux attentes des clients. Des scores insuffisants nécessitent de consolider les communications et d'étendre les capacités. Examinez tous les points de contact du cycle de vie des leads pour assurer une cohérence dans les messages. Rédigez une documentation pour guider les équipes si des disparités apparaissent. Analysez les données du CRM pour identifier des tendances sectorielles et assurez-vous que vos communications sont pertinentes. Intégrez du contenu intelligent pour personnaliser les messages en fonction des propriétés des contacts et ainsi individualiser les communications à grande échelle.";
  
        default: return "Ce pilier représente une entrave significative s'agissant de répondre aux attentes des clients.";
  
      }
    } 
  }
  