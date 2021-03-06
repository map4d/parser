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

        if (metaData.level === 2) {
          if (!administrativeParent.level2) {
            administrativeParent.level2 = {}
            administrativeParent.level2[originalName] = originalName
            return true
          }

          skip = !(originalName in administrativeParent.level2)
          return !skip
        } else if (metaData.level === 3) {
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

          if (!administrativeParent.level2) {
            administrativeParent.level2 = metaData.parentLevel2
          }

          if (!administrativeParent.level3) {
            administrativeParent.level3 = {}
            administrativeParent.level3[originalName] = originalName
            return true
          }

          skip = !(originalName in administrativeParent.level3)
          return !skip
        } else if (metaData.level === 4) {
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

          if (
            administrativeParent.level3 &&
            !Object.keys(administrativeParent.level3).some(function (
              administrativeLevel3
            ) {
              return administrativeLevel3 in metaData.parentLevel3
            })
          ) {
            skip = true
            return false
          }

          if (!administrativeParent.level2) {
            administrativeParent.level2 = metaData.parentLevel2
          }

          if (!administrativeParent.level3) {
            administrativeParent.level3 = metaData.parentLevel3
          }

          return true
        } else {
          // level 1 ignore it for now since we only have the location data in viet nam
          return true
        }
      })
    })
  }
}

module.exports = HierarchyFilter
