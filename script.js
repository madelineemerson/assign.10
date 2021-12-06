/*
This is your site JavaScript code - you can add interactivity and carry out processing
- Initially the JS writes a message to the console, and moves a button you can add from the README
*/

// Print a message in the browser's dev tools console each time the page loads
// Use your menus or right-click / control-click and choose "Inspect" > "Console"
console.log("Hello 🌎");

/* 
Make the "Click me!" button move when the visitor clicks it:
- First add the button to the page by following the "Next steps" in the README
*/
const btn = document.querySelector("button"); // Get the button from the page
// Detect clicks on the button
if (btn) {
  btn.onclick = function() {
    // The JS works in conjunction with the 'dipped' code in style.css
    btn.classList.toggle("dipped");
  };
}

// This is a single line JS comment
/*
This is a comment that can span multiple lines 
- use comments to make your own notes!
*/
Highcharts.chart('container', {

    title: {
        text: 'Murder rate in the US (2001-2020)'
    },

    subtitle: {
        text: 'FBI'
    },

    yAxis: {
        title: {
            text: 'Rate per 100,000'
        }
    },

    xAxis: {
        accessibility: {
            rangeDescription: 'Range: 2001 to 2020'
        }
    },

    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 2001
        }
    },

    series: [{
        name: 'Murder',
        data: [5.6,5.6,5.7,5.5,5.6,5.8,5.7,5.4,5,4.8,4.7,4.7,4.5,4.4,4.9,5.4,5.3,5,5.1,6.5]
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});


//Second Chart// 
Highcharts.chart('container2', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Rape in College Campuses in the US'
    },
    subtitle: {
        text: 'Source: <a href="https://crime-data-explorer.fr.cloud.gov/pages/home">FBI</a>'
    },
    xAxis: {
        categories: ["University of Michigan-Ann Arbor","University of California-Santa Barbara","University of Oklahoma-Norman","Michigan State University-Main Campus","Miami University-Main Campus","University of Iowa-Main Campus","Northern Arizona University-Main Campus","University of California-Main Campus","Ohio State University-Columbus","Arizona State University-Main Campus"],
        title: {
            text: null
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Rape (cases)',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        }
    },
    tooltip: {
        valueSuffix: ' cases'
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true
            }
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -40,
        y: 80,
        floating: true,
        borderWidth: 1,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
        shadow: true
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Rape',
        data: [23,17,15,14,14,13,12,11,11,10]
    }]
});

Highcharts.setOptions({
colors:['blue']
});

Highcharts.chart('container3', {

    chart: {
        type: 'scatter',
        plotBorderWidth: 1,
        zoomType: 'xy'
    },

    legend: {
        enabled: false
    },

    title: {
        text: 'Violent Crime Rate and Property Crime Rate in the US States'
    },

    subtitle: {
        text: 'Source: <a href="https://crime-data-explorer.fr.cloud.gov/pages/home">FBI</a>'
    },

    accessibility: {
        point: {
            valueDescriptionFormat: '{index}. {point.name}, Violent: {point.x}, Property: {point.y}, Population: {point.z}.'
        }
    },

    xAxis: {
        gridLineWidth: 1,
        title: {
            text: 'Violent Crime Rate'
        },
        labels: {
            format: '{value} '
        },
        plotLines: [{
            color: 'black',
            dashStyle: 'dot',
            width: 2,
            value: 65,
            label: {
                rotation: 0,
                y: 15,
                style: {
                    fontStyle: 'italic'
                },
                text: ''
            },
            zIndex: 3
        }],
        accessibility: {
            rangeDescription: ''
        }
    },

    yAxis: {
        startOnTick: false,
        endOnTick: false,
        title: {
            text: 'Property Crime Rate'
        },
        labels: {
            format: '{value} '
        },
        maxPadding: 0.2,
        plotLines: [{
            color: 'black',
            dashStyle: 'dot',
            width: 2,
            value: 50,
            label: {
                align: 'right',
                style: {
                    fontStyle: 'italic'
                },
                text: '',
                x: -10
            },
            zIndex: 3
        }],
        accessibility: {
            rangeDescription: ''
        }
    },

    tooltip: {
        useHTML: true,
        headerFormat: '<table>',
        pointFormat: '<tr><th colspan="2"><h3>{point.name}</h3></th></tr>' +
            '<tr><th>Violent:</th><td>{point.x}</td></tr>' +
            '<tr><th>Property:</th><td>{point.y}</td></tr>' +
            '<tr><th>Population:</th><td>{point.z}</td></tr>',
        footerFormat: '</table>',
        followPointer: true
    },

    plotOptions: {
        series: {
            dataLabels: {
                enabled: true,
                format: '{point.name}'
            }
        }
    },

    series: [{
        data: [{"name":"DISTRICT OF COLUMBIA","x":999.8,"y":3493,marker:{fillColor:'green', radius: 10},"z":712816},
{"name":"LOUISIANA","x":639.4,"y":2884.4,"z":4645318},
{"name":"NEW MEXICO","x":778.3,"y":2841.9,"z":2106319},
{"name":"COLORADO","x":423.1,"y":2833.8,"z":5807719},
{"name":"WASHINGTON","x":293.7,"y":2732.4,"z":7693612},
{"name":"SOUTH CAROLINA","x":530.7,"y":2721.1,"z":5218040},
{"name":"OKLAHOMA","x":458.6,"y":2705.6,"z":3980783},
{"name":"OREGON","x":291.9,"y":2659,"z":4241507},
{"name":"ARKANSAS","x":671.9,"y":2613.4,"z":3030522},
{"name":"MISSOURI","x":542.7,"y":2531,"z":6151548},
{"name":"TENNESSEE","x":672.7,"y":2492.8,"z":6886834},
{"name":"UTAH","x":260.7,"y":2464.4,"z":3249879},
{"name":"HAWAII","x":254.2,"y":2411.4,"z":1407006},
{"name":"ALASKA","x":837.8,"y":2260.5,"z":731158},
{"name":"TEXAS","x":446.5,"y":2245,"z":29360759},
{"name":"ARIZONA","x":484.8,"y":2227.7,"z":7421401},
{"name":"NORTH CAROLINA","x":419.3,"y":2226.5,"z":10600823},
{"name":"KANSAS","x":425,"y":2199.1,"z":2913805},
{"name":"CALIFORNIA","x":442,"y":2138.9,"z":39368078},
{"name":"ALABAMA","x":453.6,"y":2136.8,"z":4921532},
{"name":"MINNESOTA","x":277.5,"y":2124.9,"z":5657342},
{"name":"NORTH DAKOTA","x":329,"y":2124.1,"z":765309},
{"name":"MONTANA","x":469.8,"y":2120.8,"z":1080577},
{"name":"MISSISSIPPI","x":291.2,"y":2101.6,"z":2966786},
{"name":"GEORGIA","x":400.1,"y":2007.4,"z":10710017},
{"name":"DELAWARE","x":431.9,"y":1961.4,"z":986809},
{"name":"SOUTH DAKOTA","x":501.4,"y":1956.7,"z":892717},
{"name":"NEVADA","x":460.3,"y":1926.6,"z":3138259},
{"name":"NEBRASKA","x":334.1,"y":1909.2,"z":1937552},
{"name":"OHIO","x":308.8,"y":1850.3,"z":11693217},
{"name":"INDIANA","x":357.7,"y":1783.2,"z":6754953},
{"name":"KENTUCKY","x":259.1,"y":1779.5,"z":4477251},
{"name":"FLORIDA","x":383.6,"y":1769.4,"z":21733312},
{"name":"IOWA","x":303.5,"y":1698.2,"z":3163561},
{"name":"PENNSYLVANIA","x":389.5,"y":1644.1,"z":12783254},
{"name":"WYOMING","x":234.2,"y":1610.6,"z":582328},
{"name":"MARYLAND","x":399.9,"y":1609.8,"z":6055802},
{"name":"CONNECTICUT","x":181.6,"y":1565.1,"z":3557006},
{"name":"ILLINOIS","x":425.9,"y":1559.4,"z":12587530},
{"name":"WISCONSIN","x":323.4,"y":1485.7,"z":5832655},
{"name":"VIRGINIA","x":208.7,"y":1456.4,"z":8590563},
{"name":"NEW YORK","x":363.8,"y":1410.7,"z":19336776},
{"name":"WEST VIRGINIA","x":355.9,"y":1399.4,"z":1784787},
{"name":"MICHIGAN","x":478,"y":1360.9,"z":9966555},
{"name":"RHODE ISLAND","x":230.8,"y":1245.5,"z":1057125},
{"name":"VERMONT","x":173.4,"y":1217,"z":623347},
{"name":"NEW JERSEY","x":195.4,"y":1158.2,"z":8882371},
{"name":"MAINE","x":108.6,"y":1156.2,"z":1350141},
{"name":"IDAHO","x":242.6,"y":1111.9,"z":1826913},
{"name":"NEW HAMPSHIRE","x":146.4,"y":1098.9,"z":1366275},
{"name":"MASSACHUSETTS","x":308.8,"y":1053.2,"z":6893574},
{"name":"PUERTO RICO","x":164.5,"y":419.1,"z":3159343}]
    }]

});