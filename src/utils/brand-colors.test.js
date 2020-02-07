import {
  primary,
  secondary,
  complementary,
  success,
  danger,
  grey,
  blueGrey,
} from './brand-colors';

describe('Brand Colors', () => {
  it('should main secondary color', () => {
    expect(secondary.main).toBeDefined();
  });
  it('should main primary color', () => {
    expect(primary.main).toBeDefined();
  });
  it('should main complementary color', () => {
    expect(complementary.main).toBeDefined();
  });
  it('should main success color', () => {
    expect(success.main).toBeDefined();
  });
  it('should main danger color', () => {
    expect(danger.main).toBeDefined();
  });
  it('should main grey color', () => {
    expect(grey.main).toBeDefined();
  });
  it('should main blueGrey color', () => {
    expect(blueGrey.main).toBeDefined();
  });
});
