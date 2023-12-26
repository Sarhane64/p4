const AbstractManager = require("./AbstractManager");

class VoitureManager extends AbstractManager {
  constructor() {
    super({ table: "voiture" });
  }

  async readAll() {
    const [rows] = await this.database.query(`SELECT 
    voiture.name AS voiture,
    moteur.name AS moteur,
    carburant.name AS carburant,
    puissance.cv AS cv,
    couleur.name AS couleur,
    sellerie.name AS sellerie,
    version.name AS version
FROM 
    voiture
JOIN moteur ON voiture.moteur_id = moteur.id
JOIN carburant ON moteur.carburant_id = carburant.id
JOIN puissance ON moteur.puissance_id = puissance.id
JOIN design ON voiture.design_id = design.id
JOIN couleur ON design.couleur_id = couleur.id
JOIN sellerie ON design.sellerie_id = sellerie.id
JOIN version ON voiture.version_id = version.id;
`);
    return rows;
  }
}

module.exports = VoitureManager;
