import read from "./reader";
import json from "./parser";

class GameSaving {
  constructor({id, created, userInfo} = items) {
    this.id = id
    this.created = created
    this.userInfo = userInfo
  }
}

export default class GameSavingLoader {
  static load() {
    return (
      read()
      .then((result) => json(result))
      .then((result) => new GameSaving(JSON.parse(result)))
    )
  }
}