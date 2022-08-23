const Redis = require('../utils/redis');
const DB = require('../utils/db');

class AppController {
  static getStatus(request, response) {
    if (DB.isAlive() && Redis.isAlive()) {
      response.status(200).json({ redis: true, db: true });
    }
  }

  static async getStats(request, response) {
    const users = await DB.nbUsers();
    const files = await DB.nbFiles();
    response.status(200).json({ users, files });
  }
}

module.exports = AppController;
