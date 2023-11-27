import express from "express";

const router = express.Router();

router.get('/test', (req, res) => {
  res.json('ressss')
})

export default router;
