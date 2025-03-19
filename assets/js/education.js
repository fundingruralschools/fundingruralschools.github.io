document.addEventListener("DOMContentLoaded", function () {
    var spec = {
        "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
        "width": 100,  
        "height": 300,
        "title": {
            "text": "Education Rates (At least Bachelor's Degree)",
            "fontSize": 24,
            "anchor": "middle"
        },
        "data": {
            "values":[
                {"County": "Alpine", "Education %": 5.5}, {"County": "Sierra", "Education %": 8.5}, {"County": "Trinity", "Education %": 11.3}
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
                "field": "Education %",
                "type": "quantitative",
                "axis": {
                    "labelFontSize": 16, 
                    "titleFontSize": 18
                }
            },
            "tooltip": [{"field": "Education %", "type": "quantitative"}
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

    vegaEmbed("#education", spec).catch(console.error);
});