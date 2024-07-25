import { render, screen } from '@testing-library/react';
import DesktopPage from '.././src/components/page/profile';

describe('Responsive Design', () => {
  it('should render correctly on mobile devices', () => {
    global.innerWidth = 375;
    global.dispatchEvent(new Event('resize'));

    render(<DesktopPage />);
    expect(screen.getByTestId('profile-container')).toHaveClass(
      'mobile-layout'
    );
  });

  it('should render correctly on desktop devices', () => {
    global.innerWidth = 1024;
    global.dispatchEvent(new Event('resize'));

    render(<DesktopPage />);
    expect(screen.getByTestId('profile-container')).toHaveClass(
      'desktop-layout'
    );
  });
});
