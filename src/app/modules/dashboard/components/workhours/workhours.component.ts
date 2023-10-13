import { Component } from '@angular/core';

@Component({
  selector: 'app-workhours',
  templateUrl: './workhours.component.html',
  styleUrls: ['./workhours.component.scss']
})
export class WorkhoursComponent {
  data: any;

  options: any;

  selectedCity:any;
  cities:any;

  

  ngOnInit() {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--text-color');
      const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
      const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

 
      this.data = {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [
              {
                  label: 'My First dataset',
                  backgroundColor: documentStyle.getPropertyValue('--blue-500'),
                  borderColor: documentStyle.getPropertyValue('--blue-500'),
                  data: [65, 59, 80, 81, 56, 55, 40]
              },
              {
                  label: 'My Second dataset',
                  backgroundColor: documentStyle.getPropertyValue('--pink-500'),
                  borderColor: documentStyle.getPropertyValue('--pink-500'),
                  data: [28, 48, 40, 19, 86, 27, 90]
              }
          ]
      };

      this.options = {
          maintainAspectRatio: false,
          aspectRatio: 0.8,
          plugins: {
              customCanvasBackgroundColor: {
                color:  "#ffffff",
              },
              legend: {
                  labels: {
                      color: textColor
                  }
              }
          },
          layout: {
            padding: 20,
        },
          scales: {

              x: {
                  ticks: {
                      color: textColorSecondary,
                      font: {
                          weight: 500
                      }
                  },
                  grid: {
                      color: surfaceBorder,
                      drawBorder: false
                  }
              },
              y: {
                  ticks: {
                      color: textColorSecondary
                  },
                  grid: {
                      color: surfaceBorder,
                      drawBorder: false
                  }
              }

          }
      };






      this.cities = [
        { name: 'Last Week', code: 'NY' },
        { name: 'Last Month', code: 'RM' }
    ];
  }
}
