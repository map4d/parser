const Classification = require('./Classification')

class StreetComponentClassification extends Classification {
  constructor (confidence, meta) {
    super(confidence, meta)
    this.public = false
    this.label = 'street-component'
  }
}

module.exports = StreetComponentClassification
