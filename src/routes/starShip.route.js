import { Router } from "express";
import StarShipController from "../controllers/starShip.controller";
import StarShipValidator from "../validations/starShip/starShip.validator";

const router = Router();

router.post(
  "/",
  StarShipController.addStarShip
);

router.get(
  "/", 
  StarShipController.getStarShips
);

router.delete(
  "/", 
  StarShipController.deleteStarShips
);

router.patch(
  "/:uid", 
  StarShipController.updateStarShipCount
);

export default router;
