const themes = [
  {
    "theme_ita":"Agricoltura, pesca, silvicoltura e prodotti alimentari",
    "theme_code": "AGRI",
    "theme_daf_ita": "Agricoltura",
    "theme_daf_code": "agricoltura",
    "subthemes": [
      {
        "subtheme_daf_code": "policy",
        "subtheme_daf_ita": "Policy Agricola e Alimentare",
        "subthemes_ita": [
          ["5606", "politiche agricole"]  
        ]
      },
      {
        "subtheme_daf_code": "produzione_agricola",
        "subtheme_daf_ita": "Produzione Agricola",
        "subthemes_ita": [
          ["5611", "produzione e strutture agricole"],
          ["5621", "coltivazione di terreni agricoli"],
          ["5626", "mezzo di produzione agricola"],
          ["5631", "attività agricola"],
          ["6031", "industria agro-alimentare"],
          ["6036", "tecnologia alimentare"],
          ["6026", "prodotto alimentare"],
          ["6016", "prodotto agricolo trasformato"],
          ["6006", "prodotto vegetale"],
          ["6021", "bevande e zucchero"],
          ["5636", "foresta"]
        ]
      },
      {
        "subtheme_daf_code": "produzione_animale",
        "subtheme_daf_ita": "Produzione Animale",
        "subthemes_ita": [
          ["5641", "pesca"],
          ["6011", "prodotto animale"]
        ]
      }
    ]
  },
  {
    "theme_ita":"Energia",
    "theme_code": "ENER",
    "theme_daf_ita": "Energia",
    "theme_daf_code": "energia",
    "subthemes": [
      {
        "subtheme_daf_code": "policy",
        "subtheme_daf_ita": "Policy",
        "subthemes_ita": [
          ["6606", "politica energetica"]
        ]
      },
      {
        "subtheme_daf_code": "produzione_energia",
        "subtheme_daf_ita": "Produzione energetica",
        "subthemes_ita": [
          ["6611", "industria carboniera e mineraria"],
          ["6616", "industria petrolifera"],
          ["6621", "industria nucleare ed elettrica"],
          ["6626", "energia dolce"]
        ]
      }
    ]
   
  },
  {
    "theme_ita":"Regioni e Citta'",
    "theme_code": "REGI",
    "theme_daf_ita": "Territori",
    "theme_daf_code": "territori",
    "subthemes": [
      {
        "subtheme_daf_code": "policy",
        "subtheme_daf_ita": "Policy",
        "subthemes_ita": [
          ["7231", "geografia economica"],
          ["7236", "geografia politica"]
        ]
      },
      {
        "subtheme_daf_code": "europa",
        "subtheme_daf_ita": "Europa",
        "subthemes_ita": [
          ["7206", "Europa"],
          ["7211", "regioni degli Stati membri dell’Unione europea"]
        ]
      },
      {
        "subtheme_daf_code": "resto_mondo",
        "subtheme_daf_ita": "Resto del mondo",
        "subthemes_ita": [
          ["7216", "America"],
          ["7221", "Africa"],
          ["7226", "Asia-Oceania"]
        ]
      }
    ] 
  },
  {
    "theme_ita":"Trasporti",
    "theme_code":"TRAN",
    "theme_daf_ita": "Trasporti",
    "theme_daf_code": "trasporti",
    "subthemes": [
      {
        "subtheme_daf_code": "policy",
        "subtheme_daf_ita": "Policy",
        "subthemes_ita": [
          ["4806", "poolitica ei trasporti"],
          ["4811", "organizzazione dei trasporti"]
        ]
      },
      {
        "subtheme_daf_code": "terrestre",
        "subtheme_daf_ita": "Trasporti Terrestri",
        "subthemes_ita": [
          ["4816", "trasporti terrestri"]
        ]
      },
      {
        "subtheme_daf_code": "aereo",
        "subtheme_daf_ita": "Trasporti Aerei",
        "subthemes_ita": [
          ["4826", "trasporti aerei e spaziali"]
        ]
      },
      {
        "subtheme_daf_code": "marittimo",
        "subtheme_daf_ita": "Trasporto Marittimo",
        "subthemes_ita": [
          ["4821", "trasporti marittimi e fluviali"]
        ]
      }
    ] 
  },

  {
    "theme_ita":"Economia e Finanza",
    "theme_code":"ECON",
    "theme_daf_ita": "Economia e Finanza",
    "theme_daf_code": "economia",
    "subthemes": [
      {
        "subtheme_daf_code": "policy",
        "subtheme_daf_ita": "Policy",
        "subthemes_ita": [
          ["1606", "politica economica"],
          ["1611", "crescita economica"],
          ["2006", "politica commerciale"],
          ["2011", "politica tariffaria"],
          ["6806", "politiche e strutture industriali"],
          ["1616", "regione e politica regionale"],
          ["6811", "chimica"],
          ["6816", "metallurgia e siderurgia"],
          ["6821", "industria meccanica"],
          ["6826", "elettronica ed elettrotecnica"],
          ["6831", "edilizia e lavori pubblici"],
          ["6836", "industria del legno"],
          ["6841", "industria del cuoio e dei prodotti tessili"],
          ["6846", "industrie varie"]
        ]
      },
      {
        "subtheme_daf_code": "finanza_publica",
        "subtheme_daf_ita": "Finanza Pubblica",
        "subthemes_ita": [
          ["1626", "contabilità nazionale"],
          ["2436", "finanze pubbliche e politica di bilancio"],
          ["2406", "relazioni monetarie"]
        ]
      },
      {
        "subtheme_daf_code": "imprese_contabilita",
        "subtheme_daf_ita": "Imprese e Contabilita",
        "subthemes_ita": [
          ["2441", " bilancio"],
          ["4006", "organizzazione aziendale"],
          ["4011", "tipo d’impresa"],
          ["4016", "forma giuridica di societa"],
          ["4021", "gestione amministrativa"],
          ["4026", "gestione contabile"]
        ]
      },
      {
        "subtheme_daf_code": "fiscalita",
        "subtheme_daf_ita": "Fiscalita",
        "subthemes_ita": [
          ["2446", "fiscalita"]
        ]
      },
      {
        "subtheme_daf_code": "finanza",
        "subtheme_daf_ita": "Finanza",
        "subthemes_ita": [
          ["2416", "istituti finanziari e di credito"],
          ["2421", "libera circolazione dei capitali"],
          ["2426", "investimenti e finanziamenti"],
          ["2431", "assicurazioni"]
        ]
      },
      {
        "subtheme_daf_code": "macroeconomia",
        "subtheme_daf_ita": "Macroeconomia",
        "subthemes_ita": [
          ["1621", "struttura economica"],
          ["1631", "analisi economica"],
          ["2411", "economia monetaria"],
          ["2451", "prezzi"],
          ["2016", "scambi economici"],
          ["2021", "commercio internazionale"],
          ["2026", "consumo"],
          ["2031", "commercializzazione"],
          ["2036", "distribuzione commerciale"],
          ["4031", "concorrenza"]
        ]
      },
      {
        "subtheme_daf_code": "immobiliare",
        "subtheme_daf_ita": "Immobiliare",
        "subthemes_ita":[]
      }
    ]
  },

  {
    "theme_ita": "Tematiche Internazionali",
    "theme_code": "INTR",
    "theme_daf_ita": "Internazionale",
    "theme_daf_code": "internazionale",
    "subthemes": [
      {
        "subtheme_daf_code": "policy",
        "subtheme_daf_ita": "Politiche Internazionali",
        "subthemes_ita": [
          ["0806", "politica internazionale"],
          ["0811", "politica di cooperazione"],
          ["0816", "equilibrio internazionale"]
        ]
      },
      {
        "subtheme_daf_code": "difesa",
        "subtheme_daf_ita": "Difesa",
        "subthemes_ita": [
          ["0821", "difesa"]
        ]
      },
      {
        "subtheme_daf_code": "organizations",
        "subtheme_daf_ita": "Organizzazioni internazionali",
        "subthemes_ita": [
          ["7606", "Nazioni Unite"],
          ["7611", "organizzazioni europee"],
          ["7616", "organizzazioni extraeuropee"],
          ["7621", "organizzazioni mondiali"],
          ["7626", "organizzazioni non governative"]
        ]
      }
    ]
  },
  {
    "theme_ita": "Governo e Settore Pubblico",
    "theme_code": "GOVE",
    "theme_daf_ita": "Pubblica Amministrazione",
    "theme_daf_code": "pa",
    "subthemes": [
      {
        "subtheme_daf_code": "politica",
        "subtheme_daf_ita": "Politica",
        "subthemes_ita": [
          ["0406", "quadro politico"],
          ["0411", "partito politico"],
          ["0416", "procedura elettorale e voto"],
          ["0421", "parlamento"],
          ["0426", "lavori parlamentari"],
          ["0431", "vita politica e sicurezza pubblica"]
        ]
      },
      {
        "subtheme_daf_code": "amministrazione",
        "subtheme_daf_ita": "Governo e Amministrazione",
        "subthemes_ita": [
          ["0436", "potere esecutivo e amministrazione pubblica"],
          ["1006", "istituzioni dell'Unione europea e funzione pubblica europea"],
          ["1011", "diritto dell'Unione Europea"],
          ["1016", "costruzione europea"],
          ["1021", "finanze dell'Unione europea"]
        ]
      }
    ]
  },
  {
    "theme_ita": "Giustizia, sistema giuridico e sicurezza pubblica",
    "theme_code": "JUST",
    "theme_daf_ita": "Giustizia e sistema giuridico",
    "theme_daf_code": "giustizia",
    "subthemes": [
      {
        "subtheme_daf_code": "leggi",
        "subtheme_daf_ita": "Sistema giuridico",
        "subthemes_ita": [
          ["1206", "fonti e branche del diritto"],
          ["1211", "diritto civile"],
          ["1216", "diritto penale"],
          ["1231", "diritto internazionale"],
          ["1236", "diritti e liberta"]
        ]
      },
      {
        "subtheme_daf_code": "giustizia",
        "subtheme_daf_ita": "Giustizia",
        "subthemes_ita": [
          ["1221", "giustizia"],
          ["1226", "organizzazione della giustizia"]
        ]
      },
      {
        "subtheme_daf_code": "sicurezza",
        "subtheme_daf_ita": "sicurezza",
        "subthemes_ita":[]
      }
    ]
  },
  {
    "theme_ita": "Ambiente",
    "theme_code": "ENVI",
    "theme_daf_ita": "Ambiente",
    "theme_daf_code": "ambiente",
    "subthemes": [
      {
        "subtheme_daf_code": "policy",
        "subtheme_daf_ita": "Politiche ambientali",
        "subthemes_ita": [
          ["5206", "politica dell'ambiente"]
        ]
      },
      {
        "subtheme_daf_code": "misurazioni",
        "subtheme_daf_ita": "Misurazioni",
        "subthemes_ita": [
          ["5211", "ambiente naturale"],
          ["5216", "degrado ambientale"]
        ]
      }
    ]
  },

  {
    "theme_ita": "Istruzione, Cultura e Sport",
    "theme_code": "EDUC",
    "theme_daf_ita": "Istruzione Cultura Sport",
    "theme_daf_code": "istruzionecs",
    "subthemes": [
      {
        "subtheme_daf_code": "istruzione",
        "subtheme_daf_ita": "Istruzione",
        "subthemes_ita": [
          ["3206", "istruzione"],
          ["3211", "insegnamento"],
          ["3216", "organizzazione scolastica"],
          ["3221", "documentazione"],
          ["3226", "comunicazione"],
          ["3231", "informazione ed elaborazione dell'informazione"],
          ["3236", "informatica e trattamento dei dati"]
        ]
      },
      {
        "subtheme_daf_code": "luoghi",
        "subtheme_daf_ita": "Luoghi",
        "subthemes_ita": [
          ["2831", "cultura e religione"]
        ]
      },
      {
        "subtheme_daf_code": "eventi",
        "subtheme_daf_ita": "Eventi",
        "subthemes_ita": [
          ["2826", "vita sociale - tempo libero"]
        ]
      },
      {
        "subtheme_daf_code": "turismo",
        "subtheme_daf_ita": "Turismo",
        "subthemes_ita": []
      }
    ]
  },

  {
    "theme_ita": "Salute",
    "theme_code":"HEAL",
    "theme_daf_ita": "Salute",
    "theme_daf_code": "salute",
    "subthemes": [
      {
        "subtheme_daf_code": "policy",
        "subtheme_daf_ita": "Politiche sulla salute",
        "subthemes_ita": []
      },
      {
        "subtheme_daf_code": "prestazioni",
        "subtheme_daf_ita": "Prestazioni Sanitarie",
        "subthemes_ita": [
          ["2841", "salute"]
        ]
      },

      {
        "subtheme_daf_code": "monitoraggio",
        "subtheme_daf_ita": "Monitoraggio",
        "subthemes_ita": []
      }
    ]
  },

  {
    "theme_ita": "Popolazione e Societa",
    "theme_code": "SOCI",
    "theme_daf_ita": "Popolazione",
    "theme_daf_code": "popolazione",
    "subthemes": [
      {
        "subtheme_daf_code": "demografia",
        "subtheme_daf_ita": "Demografia",
        "subthemes_ita": [
          ["2811", "migrazione"],
          ["2816", "demografia e popolazione"],
          ["2806", "famiglia"]
        ]
      },
      {
        "subtheme_daf_code": "societa",
        "subtheme_daf_ita": "Societa",
        "subthemes_ita": [
          ["2826", "vita sociale"],
          ["2821", "quadro sociale"],
          ["2836", "protezione sociale"],
          ["2846", "urbanistica ed edilizia"],
          ["4406", "occupazione"],
          ["4411", "mercato del lavoro"],
          ["4416", "condizioni e organizzazioni del lavoro"],
          ["4421", "amministrazione e remunerazione del personale"],
          ["4426", "rapporti di lavoro e diritto del lavoro"]
        ]
      }
    ]
  },

  {
    "theme_ita": "Scienza e Tecnologia",
    "theme_code":"TECH",
    "theme_daf_ita": "Scienza e Tecnologia",
    "theme_daf_code": "tecnologia",
    "subthemes": [
      {
        "subtheme_daf_code": "scienza",
        "subtheme_daf_ita": "Scienza e Ricerca",
        "subthemes_ita": [
          ["3606", "scienze naturali e applicate"],
          ["3611", "scienze umane"],
          ["6416", "ricerca e proprieta intellettuale"]
        ]
      },
      {
        "subtheme_daf_code": "produzione",
        "subtheme_daf_ita": "Produzione",
        "subthemes_ita": [
          ["6406", "produzione"]
        ]
      },
      {
        "subtheme_daf_code": "monitoraggio",
        "subtheme_daf_ita": "Monitoraggio",
        "subthemes_ita": []
      }
    ]
  }
]


export default themes;