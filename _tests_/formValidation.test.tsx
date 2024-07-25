import { render, screen, fireEvent } from '@testing-library/react';
import ProfileForm from ''

describe('ProfileForm Component', () => {
  it('should validate first name and last name', () => {
    render(<ProfileForm />);
    const saveButton = screen.getByText('Save Profile');

    fireEvent.click(saveButton);

    expect(screen.getByText('First name is required')).toBeInTheDocument();
    expect(screen.getByText('Last name is required')).toBeInTheDocument();
  });

  it('should validate email format', () => {
    render(<ProfileForm />);
    const emailInput = screen.getByPlaceholderText('Enter your email');
    const saveButton = screen.getByText('Save Profile');

    fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
    fireEvent.click(saveButton);

    expect(screen.getByText('Invalid email address')).toBeInTheDocument();
  });
});
