const Classification = require('../classification/Classification')

class FirstLevelAdministrativePrefixClassification extends Classification {
  constructor (confidence, meta) {
    super(confidence, meta)
    this.label = 'level1_prefix'
  }
}

module.exports = FirstLevelAdministrativePrefixClassification
