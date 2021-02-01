const Classification = require('./Classification')

class AdministrativeComponentClassification extends Classification {
  constructor (confidence, meta) {
    super(confidence, meta)
    this.public = false
    this.label = 'administrative-component'
  }
}

module.exports = AdministrativeComponentClassification
