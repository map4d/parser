const Parser = require('./Parser')
const AlphaNumericClassifier = require('../classifier/AlphaNumericClassifier')
const TokenPositionClassifier = require('../classifier/TokenPositionClassifier')
const HouseNumberClassifier = require('../classifier/HouseNumberClassifier')
const PostcodeClassifier = require('../classifier/PostcodeClassifier')
const StreetClassifier = require('../classifier/StreetClassifier')
const StreetPrefixClassifier = require('../classifier/StreetPrefixClassifier')
const PlaceClassifier = require('../classifier/PlaceClassifier')
const FirstLevelAdministrativePrefixClassifier = require('../classifier/FirstLevelAdministrativePrefixClassifier')
const FirstLevelAdministrativeClassifier = require('../classifier/FirstLevelAdministrativeClassifier')
const SecondLevelAdministrativeClassifier = require('../classifier/SecondLevelAdministrativeClassifier')
const ThirdLevelAdministrativeClassifier = require('../classifier/ThirdLevelAdministrativeClassifier')
// const MultiStreetClassifier = require('../classifier/MultiStreetClassifier')
const CompositeClassifier = require('../classifier/CompositeClassifier')
// const AdjacencyClassifier = require('../classifier/AdjacencyClassifier')
const ExclusiveCartesianSolver = require('../solver/ExclusiveCartesianSolver')
const LeadingAreaDeclassifier = require('../solver/LeadingAreaDeclassifier')
const InvalidSolutionFilter = require('../solver/InvalidSolutionFilter')
const TokenDistanceFilter = require('../solver/TokenDistanceFilter')
const MustNotPreceedFilter = require('../solver/MustNotPreceedFilter')
const MustNotFollowFilter = require('../solver/MustNotFollowFilter')
const SubsetFilter = require('../solver/SubsetFilter')
const HouseNumberPositionPenalty = require('../solver/HouseNumberPositionPenalty')

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
        new FirstLevelAdministrativePrefixClassifier(),
        new ThirdLevelAdministrativeClassifier(),
        new SecondLevelAdministrativeClassifier(),
        new FirstLevelAdministrativeClassifier(),

        // word classifiers
        new HouseNumberClassifier(),
        new PostcodeClassifier(),
        new StreetPrefixClassifier(),

        // composite classifiers
        new CompositeClassifier(require('../classifier/scheme/street')),
        new CompositeClassifier(require('../classifier/scheme/level1'))
      ],
      // solvers
      [
        new ExclusiveCartesianSolver(),
        new LeadingAreaDeclassifier(),
        new SubsetFilter(),
        new InvalidSolutionFilter([
          ['HouseNumberClassification', 'LocalityClassification'],
          ['HouseNumberClassification', 'LocalityClassification', 'RegionClassification'],
          ['HouseNumberClassification', 'LocalityClassification', 'CountryClassification'],
          ['HouseNumberClassification', 'LocalityClassification', 'RegionClassification', 'CountryClassification'],
          ['HouseNumberClassification', 'RegionClassification'],
          ['HouseNumberClassification', 'RegionClassification', 'CountryClassification'],
          ['HouseNumberClassification', 'CountryClassification'],
          ['HouseNumberClassification', 'PostcodeClassification'],
          ['HouseNumberClassification', 'PostcodeClassification', 'LocalityClassification'],
          ['HouseNumberClassification', 'PostcodeClassification', 'RegionClassification'],
          ['HouseNumberClassification', 'PostcodeClassification', 'CountryClassification'],
          ['VenueClassification', 'HouseNumberClassification'],
          ['VenueClassification', 'PostcodeClassification']
        ]),
        new MustNotFollowFilter('VenueClassification', 'HouseNumberClassification'),
        new MustNotFollowFilter('VenueClassification', 'StreetClassification'),
        new MustNotFollowFilter('VenueClassification', 'LocalityClassification'),
        new MustNotFollowFilter('VenueClassification', 'RegionClassification'),
        new MustNotFollowFilter('VenueClassification', 'CountryClassification'),
        new MustNotFollowFilter('VenueClassification', 'PostcodeClassification'),
        new MustNotPreceedFilter('PostcodeClassification', 'HouseNumberClassification'),
        new MustNotPreceedFilter('PostcodeClassification', 'StreetClassification'),
        new MustNotPreceedFilter('LocalityClassification', 'HouseNumberClassification'),
        new MustNotPreceedFilter('LocalityClassification', 'StreetClassification'),
        new MustNotPreceedFilter('RegionClassification', 'HouseNumberClassification'),
        new MustNotPreceedFilter('RegionClassification', 'StreetClassification'),
        new MustNotPreceedFilter('CountryClassification', 'RegionClassification'),
        new MustNotPreceedFilter('CountryClassification', 'LocalityClassification'),
        new MustNotPreceedFilter('CountryClassification', 'PostcodeClassification'),
        new MustNotPreceedFilter('CountryClassification', 'StreetClassification'),
        new MustNotPreceedFilter('CountryClassification', 'HouseNumberClassification'),
        new MustNotFollowFilter('LocalityClassification', 'RegionClassification'),
        new MustNotFollowFilter('LocalityClassification', 'CountryClassification'),
        new HouseNumberPositionPenalty(),
        new TokenDistanceFilter(),
        new SubsetFilter()
      ],
      options
    )
  }
}

module.exports = AddressParser
