import StarShip from "../db/models/starShips.model";
/**
 *Contains StarShip Controller
 *
 *
 *
 * @class StarShipController
 */
class StarShipController {
    /**
     * Add an StarShip
     * @param {Request} req - Response object.
     * @param {Response} res - The payload.
     * @memberof StarShipController
     * @returns {JSON} - A JSON success response.
     *
     */
    static async addStarShip(req, res) {
        try {           
            const results = await StarShip.insertMany(req.body)
            return res.status(201).json({
                status: "success",
                data: {
                    results
                }
            });
        } catch (error) {            
            return res.status(500).json({
                status: "500 Internal server error",
                error: "Error adding StarShip",
            });
        }
    }

    /**
    * Update StarShip comment
    * @param {Request} req - Response object.
    * @param {Response} res - The payload.
    * @memberof StarShipController
    * @returns {JSON} - A JSON success response.
    *
    */
    static async updateStarShipCount(req, res) {
        try {           
            const StarShipItem = await StarShip.findOneAndUpdate({uid: req.params.uid}, { $inc: { count: 1 } }, { new: true})          
            return res.status(200).json({
                status: "success",
                data: {
                    StarShipItem
                }
            });
        } catch (error) {
            console.log(error)
            return res.status(500).json({
                status: "500 Internal server error",
                error: "Error updating StarShip",
            });
        }
    }

    /**
     * get StarShips
     * @param {Request} req - Response object.
     * @param {Response} res - The payload.
     * @memberof StarShipController
     * @returns {JSON} - A JSON success response.
     *
     */
    static async getStarShips(req, res) {
        try {
            const StarShips = await StarShip.find().sort({
                createdAt: -1
            })
            return res.status(200).json({
                status: "success",
                data: {
                    StarShips
                }
            });
        } catch (error) {
            return res.status(500).json({
                status: "500 Internal server error",
                error: "Error getting StarShips",
            });
        }
    }

    /**
     * delete all StarShips
     * @param {Request} req - Response object.
     * @param {Response} res - The payload.
     * @memberof StarShipController
     * @returns {JSON} - A JSON success response.
     *
     */
     static async deleteStarShips(req, res) {
        try {
            const StarShips = await StarShip.deleteMany()
            return res.status(200).json({
                status: "success",
                data: {
                    message:'Data delected successfully'
                }
            });
        } catch (error) {
            return res.status(500).json({
                status: "500 Internal server error",
                error: "Errordeleting StarShips",
            });
        }
    }

}
export default StarShipController;