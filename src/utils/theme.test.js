import theme, { palette } from './theme';

describe('Theme', () => {
  it('should have a color palette', () => {
    expect(palette).toBeDefined();
  });

  it('should have shadows', () => {
    expect(theme.shadows).toBeDefined();
  });

  it('should have typography', () => {
    expect(theme.typography).toBeDefined();
  });
});
