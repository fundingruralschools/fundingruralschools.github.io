document.addEventListener("DOMContentLoaded", function () {
    fetch("california.json")
        .then(response => response.json()) // 
        .then(data => {
            const mappedData = data.values.map(value => ({
                id: value.id,  
                name: value.name,
                population: value.totalPayment, 
                nationalForest: value.nationalForest,
                highlight: 1  // Highlight all present counties 
            }));

            // Vega-Lite 
            const caMapSpec = {
                "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
                "width": 600,
                "height": 700,
                "data": {
                    "url": "https://vega.github.io/vega-datasets/data/us-10m.json",
                    "format": {
                    "type": "topojson",
                                "feature": "counties"
                            }
                        },
                 "transform": [
                            {
                            "filter": "datum.id >= 6000 && datum.id < 7000"
                            },
                            {
                                "lookup": "id",
                                "from": {
                                    // injected data here!
                                    "data": { "values": mappedData },
                                    "key": "id",
                                    "fields": ["name", "population","nationalForest", "highlight"]
                                }
                            }
                        ],
                        "projection": { "type": "albersUsa" },
                        "mark": "geoshape",
                        "encoding": {
                            "color": {
                                "condition": {
                                    "test": "datum.highlight === 1",
                                    "value": "#D6C9F0"
                                },
                                "value": "white"
                            },
                            "tooltip": [
                                { "field": "id", "type": "nominal", "title": "FIPS Code" },
                                { "field": "name", "type": "nominal", "title": "County Name" },
                                { "field": "population", "type": "nominal", "title": "Total Payment" },
                                { "field": "nationalForest", "type": "nominal", "title": "National Forests" }
                            ],
                            "stroke": { "value": "black" },
                            "strokeWidth": { "value": 0.5 }
                        },
                        "selection": {
                            "hover": {
                                "type": "single",
                                "on": "mouseover",
                                "empty": "none"
                            }
                        }
                    };

    vegaEmbed("#map", caMapSpec).catch(console.error);
    })
});