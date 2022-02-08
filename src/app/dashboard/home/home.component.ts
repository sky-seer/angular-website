import { Component, OnInit } from "@angular/core";
import { Record } from './../services/record';
import { RecordsService } from './../services/records.service';

@Component({
  selector: "dashboard-home",
  templateUrl: "./home.component.html",
  providers: [RecordsService],
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  records: Record[] = [];
  temp_multi: any;
  temp_view: [number, number] = [900, 400];

  // options
  temp_legend: boolean = true;
  temp_showLabels: boolean = true;
  temp_animations: boolean = true;
  temp_xAxis: boolean = true;
  temp_yAxis: boolean = true;
  temp_showYAxisLabel: boolean = true;
  temp_showXAxisLabel: boolean = true;
  temp_timeline: boolean = true;
  temp_xAxisLabel: string = 'Dates';
  temp_yAxisLabel: string = 'Temperature (C°)';

  hum_multi: any;
  hum_view: [number, number] = [900, 400];

  // options
  hum_legend: boolean = false;
  hum_showLabels: boolean = true;
  hum_animations: boolean = true;
  hum_xAxis: boolean = true;
  hum_yAxis: boolean = true;
  hum_showYAxisLabel: boolean = true;
  hum_showXAxisLabel: boolean = true;
  hum_timeline: boolean = true;
  hum_xAxisLabel: string = 'Dates';
  hum_yAxisLabel: string = 'humidity (%)';

  constructor(private recordsService: RecordsService) {
    //Object.assign(this, { multi });
  }

  ngOnInit(): void {
      this.getRecords(500, 0);
      setInterval(() => {
        this.getRecords(500, 0);
      }, 1000 * 60 * 5);
  }

  getRecords(limit = 100, offset = 0): void {
    this.recordsService
      .getRecords(limit, offset)
      .subscribe(records => {
        const temperature = {} as {[key: number]: any};

        for (const record of records) {
          if (!temperature[record.sensor_id]) {
            temperature[record.sensor_id] = [record];
          } else {
            temperature[record.sensor_id].push(record);
          }
        }

        // reset
        this.temp_multi = [];

        for (const [sensor_id, record] of Object.entries(temperature)) {
          this.temp_multi.push(
            {
              name: 'Sensor ' + sensor_id,
              series: record.map((r: Record) => ({
                name: r.time,
                value: r.temperature
              }))
            }
          )
        }

        const humidity = {} as {[key: number]: any};

        for (const record of records) {
          if (!humidity[record.sensor_id]) {
            humidity[record.sensor_id] = [record];
          } else {
            humidity[record.sensor_id].push(record);
          }
        }

        // reset
        this.hum_multi = [];

        for (const [sensor_id, record] of Object.entries(humidity)) {
          this.hum_multi.push(
            {
              name: 'Sensor ' + sensor_id,
              series: record.map((r: Record) => ({
                name: r.time,
                value: r.humidity
              }))
            }
          )
        }
      });
  }
}
