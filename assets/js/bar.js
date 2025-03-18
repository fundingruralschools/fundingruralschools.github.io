document.addEventListener("DOMContentLoaded", function () {
    var spec = {
        "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
        "description": "Top 10 Counties Receiving the Most Funding",
        "width": 800,  
        "height": 300,
        "title": {
            "text": "Top 10 Counties Receiving the Most Funding in California",
            "fontSize": 24,
            "anchor": "middle"
        },
        "data": {
            "values": [
                {"County": "Alpine", "Payment Per Capita (USD)": 403.264885},
                {"County": "Sierra ", "Payment Per Capita (USD)": 272.493487},
                {"County": "Trinity", "Payment Per Capita (USD)": 226.078396},
                {"County": "Modoc", "Payment Per Capita (USD)": 183.042251},
                {"County": "Plumas", "Payment Per Capita (USD)": 178.019421},
                {"County": "Siskiyou", "Payment Per Capita (USD)": 101.233718},
                {"County": "Lassen", "Payment Per Capita (USD)": 63.029001},
                {"County": "Mono", "Payment Per Capita (USD)": 59.852901},
                {"County": "Del Norte", "Payment Per Capita (USD)": 52.325992},
                {"County": "Inyo", "Payment Per Capita (USD)": 40.009377}
            ]
        },
        "mark": {
            "type": "bar",
            "color": "rgb(214, 201, 240)"
        },
        "encoding": {
            "y": {
                "field": "County",
                "type": "nominal",
                "sort": "-x",  // sort by Payment Per Capita (descending)
                "axis": {
                    "labelFontSize": 16, 
                    "titleFontSize": 18
                }
            },
            "x": {
                "field": "Payment Per Capita (USD)",
                "type": "quantitative",
                "axis": {
                    "labelFontSize": 16,
                    "titleFontSize": 18
                }
            },
            "tooltip": [{"field": "Payment Per Capita (USD)", "type": "quantitative"}]
            
        }
    };

    vegaEmbed("#bar", spec).catch(console.error);
});