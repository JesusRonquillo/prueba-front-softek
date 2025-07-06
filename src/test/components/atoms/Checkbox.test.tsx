import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Checkbox from '../../../components/atoms/Checkbox/Checkbox';

describe('Checkbox Component', () => {
    const defaultProps = {
        id: 'test-checkbox',
        name: 'testCheckbox',
        checked: false,
        onChange: vi.fn(),
        label: 'Test checkbox'
    };

    it('should render with default props', () => {
        render(<Checkbox {...defaultProps} />);

        const checkbox = screen.getByRole('checkbox');
        expect(checkbox).toBeInTheDocument();
        expect(checkbox).not.toBeChecked();
    });

    it('should render as checked', () => {
        render(<Checkbox {...defaultProps} checked={true} />);

        const checkbox = screen.getByRole('checkbox');
        expect(checkbox).toBeChecked();
    });

    it('should render with label', () => {
        render(<Checkbox {...defaultProps} label="Accept terms" />);

        const label = screen.getByText('Accept terms');
        expect(label).toBeInTheDocument();

        const checkbox = screen.getByRole('checkbox');
        expect(checkbox).toHaveAttribute('id', 'test-checkbox');
    });

    it('should handle onChange events', () => {
        const handleChange = vi.fn();
        render(<Checkbox {...defaultProps} onChange={handleChange} />);

        const checkbox = screen.getByRole('checkbox');
        fireEvent.click(checkbox);

        expect(handleChange).toHaveBeenCalledTimes(1);
    });

    it('should handle required attribute', () => {
        render(<Checkbox {...defaultProps} required />);

        const checkbox = screen.getByRole('checkbox');
        expect(checkbox).toBeRequired();
    });

    it('should apply custom className', () => {
        render(<Checkbox {...defaultProps} className="custom-checkbox" />);

        const wrapper = screen.getByRole('checkbox').closest('.checkbox-wrapper');
        expect(wrapper).toHaveClass('custom-checkbox');
    });

    it('should handle required attribute', () => {
        render(<Checkbox {...defaultProps} required />);

        const checkbox = screen.getByRole('checkbox');
        expect(checkbox).toBeRequired();
    });

    it('should be clickable via label', () => {
        const handleChange = vi.fn();
        render(<Checkbox {...defaultProps} onChange={handleChange} label="Click me" />);

        const label = screen.getByText('Click me');
        fireEvent.click(label);

        expect(handleChange).toHaveBeenCalledTimes(1);
    });

    it('should handle keyboard events', () => {
        const handleChange = vi.fn();
        render(<Checkbox {...defaultProps} onChange={handleChange} />);

        const checkbox = screen.getByRole('checkbox');
        checkbox.focus();
        fireEvent.keyDown(checkbox, { key: 'Space' });

        // Checkbox should be focusable
        expect(checkbox).toHaveFocus();
    });

    it('should render with correct id and name attributes', () => {
        render(<Checkbox {...defaultProps} />);

        const checkbox = screen.getByRole('checkbox');
        expect(checkbox).toHaveAttribute('id', 'test-checkbox');
        expect(checkbox).toHaveAttribute('name', 'testCheckbox');
    });
}); 