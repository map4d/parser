const Classification = require('../classification/Classification')

class PlaceNameClassification extends Classification {
  constructor (confidence, meta) {
    super(confidence, meta)
    this.label = 'place_name'
  }
}

module.exports = PlaceNameClassification
