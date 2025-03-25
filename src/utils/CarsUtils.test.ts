import json from '../../public/vehicle_data.json';
import { extractValues, findCars } from './CarsUtils';

describe('CarsUtils', () => {
  describe('findCars function', () => {
    it('should find all cars if not filters passed', () => {
      expect(findCars({ }).length).toBe(json.data.length);
    });

    it('should find one or more cars based on the brand (exact match)', () => {
      expect(findCars({ brand: 'tesla' }).length).toBeGreaterThan(0);
    });

    it('should find one or more cars based on the brand (partial match)', () => {
      expect(findCars({ brand: 'm' }).length).toBeGreaterThan(0);
    });

    it('should find one or more cars based on the model', () => {
      expect(findCars({ model: '500' }).length).toBeGreaterThan(0);
    });

    it('should find one or more cars based on the model (partial match)', () => {
      expect(findCars({ model: 'm' }).length).toBeGreaterThan(0);
    });

    it('should find one or more cars based on the selected year (one)', () => {
      expect(findCars({ years: ['2018'] }).length).toBeGreaterThan(0);
    });

    it('should find one or more cars based on selected years (multiple)', () => {
      expect(findCars({ years: ['2018', '2020'] }).length).toBeGreaterThan(0);
    });

    it('should find one or more cars based on the selected condition (one)', () => {
      expect(findCars({ conditions: ['New'] }).length).toBeGreaterThan(0);
    });

    it('should find one or more cars based on selected conditions (multiple)', () => {
      expect(findCars({ conditions: ['New', 'Used'] }).length).toBeGreaterThan(0);
    });
  });

  describe('extractValues function', () => {
    it('should return values of conditions', () => {
      expect(new Set(extractValues('condition'))).toEqual(new Set(['New', 'Used']));
    });

    it('should return values of years', () => {
      expect(new Set(extractValues('year'))).toEqual(new Set([2018, 2019, 2020, 2021, 2022]));
    });

    it('should return values of colors (not used in the app, but still working)', () => {
      expect(new Set(extractValues('color'))).toEqual(new Set(['Black', 'Blue', 'Gold', 'Green', 'Grey', 'Orange', 'Pink', 'Red', 'Silver', 'White', 'Yellow']));
    });
  });
});
