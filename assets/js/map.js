document.addEventListener("DOMContentLoaded", function () {
    fetch("california.json")
        .then(response => response.json()) 
        .then(data => {
            const fundedCounties = new Map(data.values.map(county => [county.id, county]));

            const allCountyFIPS = [
                6001, 6003, 6005, 6007, 6009, 6011, 6013, 6015, 6017, 6019, 6021, 6023, 6025, 6027,
                6029, 6031, 6033, 6035, 6037, 6039, 6041, 6043, 6045, 6047, 6049, 6051, 6053, 6055,
                6057, 6059, 6061, 6063, 6065, 6067, 6069, 6071, 6073, 6075, 6077, 6079, 6081, 6083,
                6085, 6087, 6089, 6091, 6093, 6095, 6097, 6099, 6101, 6103, 6105, 6107, 6109, 6111,
                6113, 6115
            ];

            const mappedData = allCountyFIPS.map(fips => {
                if (fundedCounties.has(fips)) {
                    // if funded use data
                    const county = fundedCounties.get(fips);
                    return {
                        id: county.id,
                        name: county.name,
                        nationalForest: county.nationalForest || "N/A",
                        totalPayment: county.totalPayment || "0",
                        highlight: 1 
                    };
                } else {
                    return {
                        id: fips,
                        name: "Not Funded County",
                        nationalForest: "None",
                        totalPayment: "0",
                        highlight: 0 
                    };
                }
            });

            // Vega-Lite 
            const caMapSpec = {
                "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
                "width":500,
                "height": 600,
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
                                    "fields": ["name", "totalPayment","nationalForest", "highlight"]
                                }
                            }
                        ],
                        "projection": { "type": "albersUsa" },
                        "mark": "geoshape",
                        "encoding": {
                            "color": {
                                "field": "highlight",
                                "tyoe": "nominal",
                                "scale": {
                                    "domain": [0,1],
                                    "range": ["white","#D6C9F0"]
                                },
                                "legend": {
                                    "title": "County Funding Status",
                                    "orient": "top-right",
                                    "labelExpr": "datum.value === 1 ? 'Funded' : 'Not Funded'"
                                
                                }
                            },
                            "tooltip": [
                                { "field": "id", "type": "nominal", "title": "FIPS Code" },
                                { "field": "name", "type": "nominal", "title": "County Name" },
                                { "field": "totalPayment", "type": "nominal", "title": "Total Payment" },
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
                        },
                        "config":{
                        "tooltip": {"theme": "light"},
                        "view": { "tooltip": {"enable": true}}
                        }
                    };

                vegaEmbed("#map", caMapSpec).catch(console.error);
             })
});