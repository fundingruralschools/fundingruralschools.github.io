document.addEventListener("DOMContentLoaded", function () {
    var spec = {
        "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
        "width": 150,  
        "height": 300,
        "title": {
            "text": "Median Family Income",
            "fontSize": 24,
            "anchor": "middle"
        },
        "data": {
            "values":[
                {"County": "Alpine", "Income (USD)": 119659}, {"County": "Sierra", "Income (USD)": 73529}, {"County": "Trinity", "Income (USD)": 73582}
            ]
        },
        "mark": {
            "type": "bar",
            "color": "rgb(214, 201, 240)"
        },
        "encoding": {
            "x": {
                "field": "County",
                "type": "nominal",
                "axis": {
                    "labelFontSize": 16,
                    "titleFontSize": 18
                }
            },
            "y": {
                "field": "Income (USD)",
                "type": "quantitative",
                "axis": {
                    "labelFontSize": 16, 
                    "titleFontSize": 18
                }
            },
            "tooltip": [{"field": "Income (USD)", "type": "quantitative"}
            ]
        },
        // make background transparent
        "config": {
          "background": null, 
          "view": {
            "stroke": null
          },
          "axis": {
            "domainColor": "white",
            "tickColor": "white",
            "labelColor": "white",
            "titleColor": "white"
          },
          "title": {
            "color": "white"
          }
        }
    };

    vegaEmbed("#income", spec).catch(console.error);
});