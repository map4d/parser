const Classification = require('../classification/Classification')

class MiddleNameClassification extends Classification {
  constructor (confidence, meta) {
    super(confidence, meta)
    this.label = 'middle_name'
  }
}

module.exports = MiddleNameClassification
