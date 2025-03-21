// Use type safe message keys with `next-intl`
type Messages = typeof import('../locales/en.json');

// eslint-disable-next-line
declare interface IntlMessages extends Messages {}

export type CarsType = {
  brand: string;
  model: string;
  year: number;
  price: number;
  range_km: number;
  color: string;
  condition: ConditionEnum | string;
  battery_capacity_kWh: number;
  charging_speed_kW: number;
  seats: number;
  drivetrain: DrivetrainEnum | string;
  location: string;
  autopilot: boolean;
  kilometer_count: number;
  accidents: boolean;
  accident_description?: string;
  images: string[];
};

export enum ConditionEnum {
  NEW = 'New',
  USED = 'Used',
}

export enum DrivetrainEnum {
  AWD = 'AWD',
  FWD = 'FWD',
  RWD = 'RWD',
}
