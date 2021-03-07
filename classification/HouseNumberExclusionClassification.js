const Classification = require('./Classification')

class HouseNumberExclusionClassification extends Classification {
  constructor (meta) {
    super(1.0, meta)
    this.public = false
    this.label = 'housenumber_exclusion'
  }
}

module.exports = HouseNumberExclusionClassification
