const Classification = require('./Classification')

class AdministrativeComponentClassification extends Classification {
  constructor (meta) {
    super(1.0, meta)
    this.public = false
    this.label = 'administrative-component'
  }
}

module.exports = AdministrativeComponentClassification
