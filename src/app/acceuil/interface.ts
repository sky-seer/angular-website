export interface Record {
  id: number;
  time: string;
  sensor_id: number;
  battery_voltage_alert: boolean;
  temperature_alert: boolean;
  abnormal_temperature_alert: boolean;
  humidity_alert: boolean;
  battery_voltage: number;
  rssi: number;
  temperature: number;
  humidity: number;
}
