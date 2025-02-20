
var primaryColor = themeStyle && themeStyle.colors && themeStyle.colors.primary;
var isSquared = themeStyle && themeStyle.square;

if (primaryColor) {
  var siteTheme = gbifReactComponents.themeBuilder.extend({baseTheme: 'light', extendWith: {
    primary: primaryColor,
    borderRadius: isSquared? 0 : 3
  }});
}

var siteConfig = {
  routes: {
  },
  occurrence: {
    availableCatalogues: ['OCCURRENCE', 'DATASET', 'PUBLISHER', 'COLLECTION', 'INSTITUTION', 'LITERATURE']
  },
  dataset: {
    availableCatalogues: ['OCCURRENCE', 'DATASET', 'PUBLISHER', 'COLLECTION', 'INSTITUTION', 'LITERATURE']
  },
  literature: {
    availableCatalogues: ['OCCURRENCE', 'DATASET', 'PUBLISHER', 'COLLECTION', 'INSTITUTION', 'LITERATURE']
  },
  institution: {
    availableCatalogues: ['OCCURRENCE', 'DATASET', 'PUBLISHER', 'COLLECTION', 'INSTITUTION', 'LITERATURE']
  },
  collection: {
    availableCatalogues: ['OCCURRENCE', 'DATASET', 'PUBLISHER', 'COLLECTION', 'INSTITUTION', 'LITERATURE']
  },
  publisher: {
    availableCatalogues: ['OCCURRENCE', 'DATASET', 'PUBLISHER', 'COLLECTION', 'INSTITUTION', 'LITERATURE']
  },
  apiKeys: {
    "maptiler": "wFxbBf3Tv2e75QQfYOOW",
    "mapbox": "pk.eyJ1IjoiZ2JpZiIsImEiOiJja3VmZm50Z3kxcm1vMnBtdnBmeGd5cm9hIn0.M2z2n9QP9fRHZUCw9vbgOA"
  },
  maps: {
    locale: 'en',
    defaultProjection: 'MERCATOR',
    defaultMapStyle: 'NATURAL',
    mapStyles: {
      ARCTIC: ['NATURAL', 'BRIGHT'],
      PLATE_CAREE: ['NATURAL', 'BRIGHT', 'DARK'],
      MERCATOR: ['NATURAL', 'BRIGHT', 'SATELLITE', 'DARK'],
      ANTARCTIC: ['NATURAL', 'BRIGHT', 'DARK']
    },
    styleLookup: {
      MERCATOR: {
        NATURAL: 'NATURAL_HILLSHADE_MERCATOR'
      }
    }
  }
};
