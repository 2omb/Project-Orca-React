module.exports = {
  "theme": {
    "extend": {
      "colors": {
        "Gray": {
          "500": "#595959",
          "700": "#999999",
          "900": "#D9D9D9",
          "Black": "#000000",
          "White": "#FFFFFF"
        },
        "Primary": {
          "100": "#003EB3",
          "300": "#0074F0",
          "500": "#14A9FF",
          "700": "#85DCFF"
        },
        "Danger": {
          "300": "#A22020",
          "500": "#BF2626",
          "700": "#E14747"
        },
        "Success": {
          "300": "#199033",
          "500": "#32A94C",
          "700": "#4CC366"
        },
        "foreground": "#000000",
        "background": "#FFFFFF"
      },
      "spacing": {
        "Unit": "16px",
        "OneAndHalfUnits": "24px",
        "SixUnits": "96px",
        "FourUnits": "64px",
        "ThreeUnits": "48px",
        "FiveUnits": "80px",
        "HalfUnit": "8px",
        "TwoUnits": "32px"
      },
      "borderRadius": {
        "Round": "50%",
        "Radius8": "8px",
        "Radius2": "2px",
        "Radius4": "4px"
      },
      "scale": {
        "XLarge": "192px",
        "XXLarge": "288px",
        "Medium": "96px",
        "Large": "144px",
        "MaxWidth": "1400px",
        "XSmall": "16px",
        "Small": "48px"
      }
    }
  },
  "plugins": [],
  "content": [
    "./src/**/*.{js,ts,jsx,tsx}"
  ]
}