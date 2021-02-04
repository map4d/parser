const Parser = require('./Parser')
const AlphaNumericClassifier = require('../classifier/AlphaNumericClassifier')
const TokenPositionClassifier = require('../classifier/TokenPositionClassifier')
const HouseNumberClassifier = require('../classifier/HouseNumberClassifier')
const PostcodeClassifier = require('../classifier/PostcodeClassifier')
const StreetClassifier = require('../classifier/StreetClassifier')
const StreetPrefixClassifier = require('../classifier/StreetPrefixClassifier')
const PlaceClassifier = require('../classifier/PlaceClassifier')
const AdministrativeClassifier = require('../classifier/AdministrativeClassifier')
// const MultiStreetClassifier = require('../classifier/MultiStreetClassifier')
const CompositeClassifier = require('../classifier/CompositeClassifier')
// const AdjacencyClassifier = require('../classifier/AdjacencyClassifier')
const ExclusiveCartesianSolver = require('../solver/ExclusiveCartesianSolver')
const LeadingAdministrativeDeclassifier = require('../solver/LeadingAdministrativeDeclassifier')
const InvalidSolutionFilter = require('../solver/InvalidSolutionFilter')
const TokenDistanceFilter = require('../solver/TokenDistanceFilter')
const MustNotPreceedFilter = require('../solver/MustNotPreceedFilter')
const MustNotPreceedPlaceFilter = require('../solver/MustNotPreceedPlaceFilter')
const MustNotFollowFilter = require('../solver/MustNotFollowFilter')
const SubsetFilter = require('../solver/SubsetFilter')
const HouseNumberPositionPenalty = require('../solver/HouseNumberPositionPenalty')
const StreetNameSameAsAdministrativePenalty = require('../solver/StreetNameSameAsAdministrativePenalty')

class AddressParser extends Parser {
  constructor (options) {
    super(
      // classifiers
      [
        // generic word classifiers
        new AlphaNumericClassifier(),
        new TokenPositionClassifier(),

        // phrase classifiers
        new PlaceClassifier(),
        new StreetClassifier(),
        new StreetPrefixClassifier(),
        new AdministrativeClassifier(),
        new HouseNumberClassifier(),

        // word classifiers
        new PostcodeClassifier(),

        // composite classifiers
        new CompositeClassifier(require('../classifier/scheme/housenumber')),
        new CompositeClassifier(require('../classifier/scheme/street'))
      ],
      // solvers
      [
        new ExclusiveCartesianSolver(),
        new LeadingAdministrativeDeclassifier(),
        new SubsetFilter(),
        new InvalidSolutionFilter([
          ['HouseNumberClassification', 'PostcodeClassification']
        ]),
        new MustNotPreceedFilter('PostcodeClassification', 'HouseNumberClassification'),
        new MustNotPreceedFilter('StreetClassification', 'HouseNumberClassification'),
        new MustNotPreceedPlaceFilter(),
        // Unused at the moment
        new MustNotFollowFilter('LocalityClassification', 'RegionClassification'),
        new HouseNumberPositionPenalty(),
        new StreetNameSameAsAdministrativePenalty(),
        new TokenDistanceFilter(),
        new SubsetFilter()
      ],
      options
    )
  }
}

module.exports = AddressParser
