const WordClassifier = require('./super/WordClassifier')
const PersonalTitleClassification = require('../classification/PersonalTitleClassification')
const libpostal = require('../resources/libpostal/libpostal')

class PersonalTitleClassifier extends WordClassifier {
  setup () {
    // load index tokens
    this.index = {}
    libpostal.load(this.index, ['vn'], 'personal_titles.txt')
  }

  each (span) {
    // skip spans which contain numbers
    if (span.contains.numerals) { return }

    // use an inverted index for full token matching as it's O(1)
    if (this.index.hasOwnProperty(span.norm)) {
      span.classify(new PersonalTitleClassification(1.0))
    }
  }
}

module.exports = PersonalTitleClassifier
