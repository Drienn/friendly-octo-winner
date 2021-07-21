import { dateTimeFormat } from "../utils";

describe('dateTimeFormat', () => {
  it('returns correct formatting', () => {
    const result = dateTimeFormat(new Date(10, 10, 2021));
    expect(result).toBe('05/13/16 12:00:00 am');
  })
})