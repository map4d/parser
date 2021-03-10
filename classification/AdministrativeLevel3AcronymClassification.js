const Classification = require('./Classification')

class AdministrativeLevel3AcronymClassification extends Classification {
  constructor (confidence, meta) {
    super(confidence, meta)
    this.public = true
    this.label = 'level3'
  }
}

module.exports = AdministrativeLevel3AcronymClassification
