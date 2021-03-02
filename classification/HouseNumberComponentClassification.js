const Classification = require('./Classification')

class HouseNumberComponentClassification extends Classification {
  constructor (meta) {
    super(1.0, meta)
    this.label = 'housenumber-component'
  }
}

module.exports = HouseNumberComponentClassification
