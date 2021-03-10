const Classification = require('./Classification')

class AdministrativeLevel4AcronymClassification extends Classification {
  constructor (confidence, meta) {
    super(confidence, meta)
    this.public = true
    this.label = 'level4'
  }
}

module.exports = AdministrativeLevel4AcronymClassification
