// __tests__/customizeLinks.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CustomizeLinks from '.././src/components/page/customize';

describe('CustomizeLinks Component', () => {
  test('renders the CustomizeLinks component', () => {
    render(<CustomizeLinks />);

    // Check if the component is rendered
    expect(screen.getByText('Customize Links')).toBeInTheDocument();
  });

  test('can add a new link', () => {
    render(<CustomizeLinks />);

    // Simulate adding a new link
    fireEvent.change(screen.getByPlaceholderText('Enter URL'), {
      target: { value: 'https://github.com' },
    });
    fireEvent.click(screen.getByText('Add Link'));

    // Check if the new link is in the document
    expect(screen.getByText('https://github.com')).toBeInTheDocument();
  });

  test('can update an existing link', () => {
    render(<CustomizeLinks />);

    // Simulate adding and then updating a link
    fireEvent.change(screen.getByPlaceholderText('Enter URL'), {
      target: { value: 'https://github.com' },
    });
    fireEvent.click(screen.getByText('Add Link'));
    fireEvent.click(screen.getByText('Edit'));
    fireEvent.change(screen.getByPlaceholderText('Enter URL'), {
      target: { value: 'https://linkedin.com' },
    });
    fireEvent.click(screen.getByText('Update Link'));

    // Check if the link is updated
    expect(screen.getByText('https://linkedin.com')).toBeInTheDocument();
  });

  test('can delete a link', () => {
    render(<CustomizeLinks />);

    // Simulate adding and then deleting a link
    fireEvent.change(screen.getByPlaceholderText('Enter URL'), {
      target: { value: 'https://github.com' },
    });
    fireEvent.click(screen.getByText('Add Link'));
    fireEvent.click(screen.getByText('Delete'));

    // Check if the link is deleted
    expect(screen.queryByText('https://github.com')).not.toBeInTheDocument();
  });
});
