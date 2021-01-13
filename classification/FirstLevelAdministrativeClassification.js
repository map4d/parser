const Classification = require('./Classification')

class FirstLevelAdministrativeClassification extends Classification {
  constructor (confidence, meta) {
    super(confidence, meta)
    this.public = true
    this.label = 'level1'
  }
}

module.exports = FirstLevelAdministrativeClassification
