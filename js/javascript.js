
  
/* Currency Exchange Rates EUR/USD */

$.getJSON('https://www.quandl.com/api/v3/datasets/CURRFX/EURUSD.json?auth_token=xmAxcvwwUw8FS7_zXjRH&start_date=2015-01-01',
    function(json) {

        var serie1Json = json.dataset.data.map(function(d) {
          return [new Date(d[0]).getTime(), d[1]]
        });

        var serie2Json = json.dataset.data.map(function(d) {
          return [new Date(d[0]).getTime(), d[2]]
        });

        var serie3Json = json.dataset.data.map(function(d) {
          return [new Date(d[0]).getTime(), d[3]]
        });
        
        $('#containerEUR_USD').highcharts('StockChart', 
        {
              rangeSelector : {
                  enabled: false
              },              
              title: {
                text: json.dataset.name
              },
              subtitle: {
                text: json.dataset.description 
              },
              yAxis : {
                  title : {
                    text : 'Exchange EUR USD'
                  },
                  tickInterval: 0.01
              },
              series: [{
                    name: json.dataset.column_names[1],
                    data: serie1Json,
                    tooltip: {
                          valueDecimals: 2
                    }
                }, {
                    name: json.dataset.column_names[2],
                    data: serie2Json,
                    tooltip: {
                          valueDecimals: 2
                    }
                }, {
                    name: json.dataset.column_names[3],
                    data: serie3Json,
                    tooltip: {
                          valueDecimals: 2                          
                    }
                }],
                tooltip: {
                    valueSuffix: 'USD'
                }
        });
});
  
/* Currency Exchange Rates USD/CLP */

 $.getJSON('https://www.quandl.com/api/v3/datasets/CURRFX/USDCLP.json?auth_token=xmAxcvwwUw8FS7_zXjRH&start_date=2015-01-01 ',
    function(json) {

        var serie1Json = json.dataset.data.map(function(d) {
          return [new Date(d[0]).getTime(), d[1]]
        });

        var serie2Json = json.dataset.data.map(function(d) {
          return [new Date(d[0]).getTime(), d[2]]
        });

        var serie3Json = json.dataset.data.map(function(d) {
          return [new Date(d[0]).getTime(), d[3]]
        });
        
        $('#containerUSD_CLP').highcharts('StockChart', 
        {
              rangeSelector : {
                enabled: false
              },     
              title: {
                text: json.dataset.name
              },
              subtitle: {
                text: json.dataset.description
              },
              yAxis : {
                title : {
                    text : 'Exchange USD CLP'
                },
                tickInterval: 100
              },    
              series: [{
                    name: json.dataset.column_names[1],
                    data: serie1Json,
                    tooltip: {
                          valueDecimals: 2
                    }
                }, {
                    name: json.dataset.column_names[2],
                    data: serie2Json,
                    tooltip: {
                          valueDecimals: 2
                    }
                }, {
                    name: json.dataset.column_names[3],
                    data: serie3Json,
                    tooltip: {
                          valueDecimals: 2
                    }
                }],
                tooltip: {
                    valueSuffix: 'CLP'
                }
        });
  });
