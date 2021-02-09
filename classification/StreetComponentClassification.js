const Classification = require('./Classification')

class StreetComponentClassification extends Classification {
  constructor (meta) {
    super(1.0, meta)
    this.public = false
    this.label = 'street-component'
  }
}

module.exports = StreetComponentClassification
