google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawBar);

function drawBar() {
      var barColor = '#8a8a8a'
      var data = google.visualization.arrayToDataTable([
        ['Skill', 'Skill Level', {role: 'style'}, {role: 'annotation'}],
        ['HTML5', 8, barColor, 'HTML5'],
        ['CSS3', 7, barColor, 'CSS3'],
        ['SCSS', 6, barColor, 'SCSS'],
        ['JavaScript', 5, barColor, 'JavaScript'],
        ['Adobe Photoshop', 7, barColor, 'Adobe Photoshop'],
        ['Adobe Illustrator', 7, barColor, 'Adobe Illustrator'],
        ['Adobe InDesign', 7, barColor, 'Adobe InDesign'],
        ['Adobe Premiere Pro', 7, barColor, 'Adobe Premiere Pro'],
      ]);

      var options = {
        chartArea: {width: '80%', height: '85%'},
        backgroundColor: 'none',
        legend: {position: 'none'},
        hAxis: {
          minValue: 0,
          maxValue: 10,
        },
        vAxis: {
          textPosition: 'none'
        }
      };

      var chart = new google.visualization.BarChart(document.getElementById('chart_skills'));

      chart.draw(data, options);
    }
