class HierarchyFilter {
  solve (tokenizer) {
    tokenizer.solution.forEach((s) => {
      let administrativeParent = {}
      let skip = false
      s.pair = s.pair.reverse().filter((p) => {
        if (
          p.classification.constructor.name !== 'AdministrativeClassification'
        ) {
          return true
        }

        if (skip) {
          return false
        }
        let metaData = p.classification.meta
        let originalName = metaData.original

        if (metaData.level === 1) {
          if (!administrativeParent.level1) {
            administrativeParent.level1 = {}
            administrativeParent.level1[originalName] = originalName
            return true
          }

          skip = !(originalName in administrativeParent.level1)
          return !skip
        } else if (metaData.level === 2) {
          if (
            administrativeParent.level1 &&
            !Object.keys(administrativeParent.level1).some(function (
              administrativeLevel1
            ) {
              return administrativeLevel1 in metaData.parentLevel1
            })
          ) {
            skip = true
            return false
          }

          if (!administrativeParent.level1) {
            administrativeParent.level1 = metaData.parentLevel1
          }

          if (!administrativeParent.level2) {
            administrativeParent.level2 = {}
            administrativeParent.level2[originalName] = originalName
            return true
          }

          skip = !(originalName in administrativeParent.level2)
          return !skip
        } else if (metaData.level === 3) {
          if (
            administrativeParent.level1 &&
            !Object.keys(administrativeParent.level1).some(function (
              administrativeLevel1
            ) {
              return administrativeLevel1 in metaData.parentLevel1
            })
          ) {
            skip = true
            return false
          }

          if (
            administrativeParent.level2 &&
            !Object.keys(administrativeParent.level2).some(function (
              administrativeLevel2
            ) {
              return administrativeLevel2 in metaData.parentLevel2
            })
          ) {
            skip = true
            return false
          }

          if (!administrativeParent.level1) {
            administrativeParent.level1 = metaData.parentLevel1
          }

          if (!administrativeParent.level2) {
            administrativeParent.level2 = metaData.parentLevel2
          }

          return true
        } else {
          // level 0 ignore it for now since we only have the location data in viet nam
          return true
        }
      })
    })
  }
}

module.exports = HierarchyFilter
