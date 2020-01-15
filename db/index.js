const mysql = require("mysql");

const pool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "",
  database: "ip telephony",
  port: "3306"
});

let ipTelephonyDb = {};

ipTelephonyDb.allIpPhones = () => {
  return new Promise((resolve, reject) => {
    pool.query("SELECT * FROM `ip-телефон`", (err, results) => {
      if (err) return reject(err);

      return resolve(results);
    });
  });
};

ipTelephonyDb.allIpPhonesWithSortingAsc = () => {
  return new Promise((resolve, reject) => {
    pool.query(
      "SELECT * FROM `ip-телефон` ORDER BY `ip-телефон`.`Цена` ASC",
      (err, results) => {
        if (err) return reject(err);

        return resolve(results);
      }
    );
  });
};

ipTelephonyDb.allIpPhonesWithModuleFirst = moduleId => {
  return new Promise((resolve, reject) => {
    pool.query(
      "SELECT * FROM `ip-телефон` WHERE `Совместимые модуль 1` = ? OR `Совместимый модуль 2` = ?",
      [moduleId, moduleId],
      (err, results) => {
        if (err) return reject(err);

        return resolve(results);
      }
    );
  });
};

ipTelephonyDb.allIpPhonesWithSortingDesc = () => {
  return new Promise((resolve, reject) => {
    pool.query(
      "SELECT * FROM `ip-телефон` ORDER BY `ip-телефон`.`Цена` DESC",
      (err, results) => {
        if (err) return reject(err);

        return resolve(results);
      }
    );
  });
};

ipTelephonyDb.allVoip = () => {
  return new Promise((resolve, reject) => {
    pool.query("SELECT * FROM `voip-шлюз`", (err, results) => {
      if (err) return reject(err);

      return resolve(results);
    });
  });
};

ipTelephonyDb.allVoIpWithSortingAsc = () => {
  return new Promise((resolve, reject) => {
    pool.query(
      "SELECT * FROM `voip-шлюз` ORDER BY `voip-шлюз`.`Цена` ASC",
      (err, results) => {
        if (err) return reject(err);

        return resolve(results);
      }
    );
  });
};

ipTelephonyDb.allVoIpWithModuleFirst = moduleId => {
  return new Promise((resolve, reject) => {
    pool.query(
      "SELECT * FROM `voip-шлюз` WHERE `Совместимые модуль 1` = ? OR `Совместимый модуль 2` = ?",
      [moduleId, moduleId],
      (err, results) => {
        if (err) return reject(err);

        return resolve(results);
      }
    );
  });
};

ipTelephonyDb.allVoIpWithSortingDesc = () => {
  return new Promise((resolve, reject) => {
    pool.query(
      "SELECT * FROM `voip-шлюз` ORDER BY `voip-шлюз`.`Цена` DESC",
      (err, results) => {
        if (err) return reject(err);

        return resolve(results);
      }
    );
  });
};

ipTelephonyDb.allIpAtc = () => {
  return new Promise((resolve, reject) => {
    pool.query("SELECT * FROM `ip-atc`", (err, results) => {
      if (err) return reject(err);

      return resolve(results);
    });
  });
};

ipTelephonyDb.allIpAtcWithSortingAsc = () => {
  return new Promise((resolve, reject) => {
    pool.query(
      "SELECT * FROM `ip-atc` ORDER BY `ip-atc`.`Цена` ASC",
      (err, results) => {
        if (err) return reject(err);

        return resolve(results);
      }
    );
  });
};

ipTelephonyDb.allIpAtcWithModuleFirst = moduleId => {
  return new Promise((resolve, reject) => {
    pool.query(
      "SELECT * FROM `ip-atc` WHERE `Совместимые модуль 1` = ? OR `Совместимый модуль 2` = ?",
      [moduleId, moduleId],
      (err, results) => {
        if (err) return reject(err);

        return resolve(results);
      }
    );
  });
};

ipTelephonyDb.allIpAtcWithSortingDesc = () => {
  return new Promise((resolve, reject) => {
    pool.query(
      "SELECT * FROM `ip-atc` ORDER BY `ip-atc`.`Цена` DESC",
      (err, results) => {
        if (err) return reject(err);

        return resolve(results);
      }
    );
  });
};

ipTelephonyDb.getModule = id => {
  return new Promise((resolve, reject) => {
    pool.query("SELECT * FROM `модули` WHERE id = ?", [id], (err, results) => {
      if (err) return reject(err);

      return resolve(results[0]);
    });
  });
};

ipTelephonyDb.getProtocols = id => {
  return new Promise((resolve, reject) => {
    pool.query(
      "SELECT * FROM `протокол` WHERE id = ?",
      [id],
      (err, results) => {
        if (err) return reject(err);

        return resolve(results[0]);
      }
    );
  });
};

ipTelephonyDb.save = (id, name, price) => {
  return new Promise((resolve, reject) => {
    let post = { name: `${name}`, id: `${id}`, price: `${price}` };
    let sql = "INSERT INTO `saved` SET ?";
    pool.query(sql, post, (err, results) => {
      if (err) return reject(err);
      console.log(results);
    });
  });
};

ipTelephonyDb.removeFromSaved = id => {
  return new Promise((resolve, reject) => {
    let post = { id: `${id}` };
    let sql = "DELETE FROM saved WHERE ?";
    pool.query(sql, post, (err, results) => {
      if (err) return reject(err);
      console.log(results);
    });
  });
};

ipTelephonyDb.allSaved = () => {
  return new Promise((resolve, reject) => {
    pool.query("SELECT * FROM `saved`", (err, results) => {
      if (err) return reject(err);

      return resolve(results);
    });
  });
};

module.exports = ipTelephonyDb;
