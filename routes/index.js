const express = require("express");
const db = require("../db");

const router = express.Router();

router.get("/ip-phones", async (req, res, next) => {
  try {
    const results = await db.allIpPhones();
    res.send(res.json(results));
  } catch (e) {
    res.sendStatus(500);
    console.log(e);
  }
});

router.get("/ip-phones/asc", async (req, res, next) => {
  try {
    const results = await db.allIpPhonesWithSortingAsc();
    res.send(res.json(results));
  } catch (e) {
    res.sendStatus(500);
    console.log(e);
  }
});

router.get("/ip-phones/desc", async (req, res, next) => {
  try {
    const results = await db.allIpPhonesWithSortingDesc();
    res.send(res.json(results));
  } catch (e) {
    res.sendStatus(500);
    console.log(e);
  }
});

router.get("/ip-phones/:moduleId", async (req, res, next) => {
  try {
    const results = await db.allIpPhonesWithModuleFirst(req.params.moduleId);
    res.send(res.json(results));
  } catch (e) {
    res.sendStatus(500);
    console.log(e);
  }
});

router.get("/voip", async (req, res, next) => {
  try {
    const results = await db.allVoip();
    res.send(res.json(results));
  } catch (e) {
    res.sendStatus(500);
    console.log(e);
  }
});

router.get("/voip/asc", async (req, res, next) => {
  try {
    const results = await db.allVoIpWithSortingAsc();
    res.send(res.json(results));
  } catch (e) {
    res.sendStatus(500);
    console.log(e);
  }
});

router.get("/voip/desc", async (req, res, next) => {
  try {
    const results = await db.allVoIpWithSortingDesc();
    res.send(res.json(results));
  } catch (e) {
    res.sendStatus(500);
    console.log(e);
  }
});

router.get("/voip/:moduleId", async (req, res, next) => {
  try {
    const results = await db.allVoIpWithModuleFirst(req.params.moduleId);
    res.send(res.json(results));
  } catch (e) {
    res.sendStatus(500);
    console.log(e);
  }
});

router.get("/ipAtc", async (req, res, next) => {
  try {
    const results = await db.allIpAtc();
    res.send(res.json(results));
  } catch (e) {
    res.sendStatus(500);
    console.log(e);
  }
});

router.get("/ipAtc/asc", async (req, res, next) => {
  try {
    const results = await db.allIpAtcWithSortingAsc();
    res.send(res.json(results));
  } catch (e) {
    res.sendStatus(500);
    console.log(e);
  }
});

router.get("/ipAtc/desc", async (req, res, next) => {
  try {
    const results = await db.allIpAtcWithSortingDesc();
    res.send(res.json(results));
  } catch (e) {
    res.sendStatus(500);
    console.log(e);
  }
});

router.get("/ipAtc/:moduleId", async (req, res, next) => {
  try {
    const results = await db.allIpAtcWithModuleFirst(req.params.moduleId);
    res.send(res.json(results));
  } catch (e) {
    res.sendStatus(500);
    console.log(e);
  }
});

router.get("/modules/:moduleId", async (req, res, next) => {
  try {
    const results = await db.getModule(req.params.moduleId);
    res.send(res.json(results));
  } catch (e) {
    res.sendStatus(500);
    console.log(e);
  }
});

router.get("/protocols/:protocolId", async (req, res, next) => {
  try {
    const results = await db.getProtocols(req.params.protocolId);
    res.send(res.json(results));
  } catch (e) {
    res.sendStatus(500);
    console.log(e);
  }
});

router.get("/save/:id/:name/:price", async (req, res, next) => {
  try {
    await db.save(req.params.id, req.params.name, req.params.price);
  } catch {
    res.sendStatus(500);
    console.log(e);
  }
});

router.get("/removeFromSaved/:id", async (req, res, next) => {
  try {
    await db.removeFromSaved(req.params.id);
  } catch {
    res.sendStatus(500);
    console.log(e);
  }
});

router.get("/saved", async (req, res, next) => {
  try {
    const results = await db.allSaved();
    res.send(res.json(results));
  } catch (e) {
    res.sendStatus(500);
    console.log(e);
  }
});

module.exports = router;
