import { Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-vertical-bar',
  templateUrl: './vertical-bar.component.html',
  styleUrls: ['./vertical-bar.component.scss']
})
export class VerticalBarComponent implements OnInit{


  @Input()
  data:any;

  @Input()
  options:any


  @ViewChild('chart') chart:any;

  ngOnInit(): void {
    console.log(this.chart)
    
  }

  ngAfterViewInit(): void {
    // Note: changes to the plugin code is not reflected to the chart, because the plugin is loaded at chart construction time and editor changes only trigger an chart.update().
    const plugin = {
      id: 'customCanvasBackgroundColor',
      beforeDraw: (chart:any, args:any, options:any) => {
        const {ctx} = chart;
        ctx.save();
        ctx.globalCompositeOperation = 'destination-over';
        ctx.fillStyle = options.color || '#99ffff';
        ctx.fillRect(0, 0, chart.width, chart.height);
        ctx.restore();
      }
    };

    this.chart.plugins.push(plugin);


    this.chart.refresh()

    
  }
}
