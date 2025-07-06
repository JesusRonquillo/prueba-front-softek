import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Input from '../../../components/atoms/Input/Input';

describe('Input Component', () => {
    const defaultProps = {
        id: 'test-input',
        name: 'testInput',
        value: '',
        onChange: vi.fn()
    };

    it('should render with default props', () => {
        render(<Input {...defaultProps} />);

        const input = screen.getByRole('textbox');
        expect(input).toBeInTheDocument();
        expect(input).toHaveClass('input');
    });

    it('should render with placeholder', () => {
        render(<Input {...defaultProps} placeholder="Enter your name" />);

        const input = screen.getByPlaceholderText('Enter your name');
        expect(input).toBeInTheDocument();
    });

    it('should render with value', () => {
        render(<Input {...defaultProps} value="Test value" />);

        const input = screen.getByDisplayValue('Test value');
        expect(input).toBeInTheDocument();
    });

    it('should handle onChange events', () => {
        const handleChange = vi.fn();
        render(<Input {...defaultProps} onChange={handleChange} />);

        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { value: 'new value' } });

        expect(handleChange).toHaveBeenCalledTimes(1);
    });

    it('should apply error state', () => {
        render(<Input {...defaultProps} error="This field is required" />);

        const input = screen.getByRole('textbox');
        expect(input).toHaveClass('input--error');
        expect(screen.getByText('This field is required')).toBeInTheDocument();
    });

    it('should apply custom className', () => {
        render(<Input {...defaultProps} className="custom-input" />);

        const wrapper = screen.getByRole('textbox').closest('.input-wrapper');
        expect(wrapper).toHaveClass('custom-input');
    });

    it('should handle different input types', () => {
        render(<Input {...defaultProps} type="email" />);

        const input = screen.getByRole('textbox');
        expect(input).toHaveAttribute('type', 'email');
    });

    it('should render with label', () => {
        render(<Input {...defaultProps} label="Name" />);

        const label = screen.getByText('Name');
        expect(label).toBeInTheDocument();
        expect(label).toHaveAttribute('for', 'test-input');
    });

    it('should handle required attribute', () => {
        render(<Input {...defaultProps} required />);

        const input = screen.getByRole('textbox');
        expect(input).toBeRequired();
    });

    it('should handle number input type', () => {
        render(<Input {...defaultProps} type="number" />);

        const input = screen.getByRole('spinbutton');
        expect(input).toHaveAttribute('type', 'number');
    });

    it('should handle password input type', () => {
        render(<Input {...defaultProps} type="password" />);

        const input = screen.getByRole('textbox');
        expect(input).toHaveAttribute('type', 'password');
    });
}); 