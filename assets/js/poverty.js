document.addEventListener("DOMContentLoaded", function () {
    var spec = {
        "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
        "width": 150,  
        "height": 300,
        "title": {
            "text": "Families Below Poverty Rate",
            "fontSize": 24,
            "anchor": "middle"
        },
        "data": {
            "values":[
                {"County": "Alpine", "Poverty %": 5.5}, {"County": "Sierra", "Poverty %": 8.5}, {"County": "Trinity", "Poverty %": 11.3}
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
                "field": "Poverty %",
                "type": "quantitative",
                "axis": {
                    "labelFontSize": 16, 
                    "titleFontSize": 18
                }
            },
            "tooltip": [{"field": "Poverty %", "type": "quantitative"}
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

    vegaEmbed("#poverty", spec).catch(console.error);
});