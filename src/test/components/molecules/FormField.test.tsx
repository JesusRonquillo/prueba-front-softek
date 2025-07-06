import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import FormField from '../../../components/molecules/FormField/FormField';

describe('FormField Component', () => {
    it('should render document field', () => {
        const handleChange = vi.fn();
        render(
            <FormField
                type="document"
                value=""
                onChange={handleChange}
            />
        );

        expect(screen.getByText('DNI')).toBeInTheDocument();
        expect(screen.getByText('Nro. de documento')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('30216147')).toBeInTheDocument();
    });

    it('should render phone field', () => {
        const handleChange = vi.fn();
        render(
            <FormField
                type="phone"
                value=""
                onChange={handleChange}
            />
        );

        expect(screen.getByText('Celular')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('5130216147')).toBeInTheDocument();
    });

    it('should handle document input change', () => {
        const handleChange = vi.fn();
        render(
            <FormField
                type="document"
                value=""
                onChange={handleChange}
            />
        );

        const input = screen.getByPlaceholderText('30216147');
        fireEvent.change(input, { target: { value: '12345678' } });

        expect(handleChange).toHaveBeenCalledTimes(1);
    });

    it('should handle phone input change', () => {
        const handleChange = vi.fn();
        render(
            <FormField
                type="phone"
                value=""
                onChange={handleChange}
            />
        );

        const input = screen.getByPlaceholderText('5130216147');
        fireEvent.change(input, { target: { value: '987654321' } });

        expect(handleChange).toHaveBeenCalledTimes(1);
    });

    it('should display document value', () => {
        const handleChange = vi.fn();
        render(
            <FormField
                type="document"
                value="12345678"
                onChange={handleChange}
            />
        );

        expect(screen.getByDisplayValue('12345678')).toBeInTheDocument();
    });

    it('should display phone value', () => {
        const handleChange = vi.fn();
        render(
            <FormField
                type="phone"
                value="987654321"
                onChange={handleChange}
            />
        );

        expect(screen.getByDisplayValue('987654321')).toBeInTheDocument();
    });

    it('should render document field', () => {
        const handleChange = vi.fn();
        render(
            <FormField
                type="document"
                value=""
                onChange={handleChange}
            />
        );

        expect(screen.getByText('DNI')).toBeInTheDocument();
        expect(screen.getByText('Nro. de documento')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('30216147')).toBeInTheDocument();
    });

    it('should render phone field', () => {
        const handleChange = vi.fn();
        render(
            <FormField
                type="phone"
                value=""
                onChange={handleChange}
            />
        );

        expect(screen.getByText('Celular')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('5130216147')).toBeInTheDocument();
    });

    it('should handle document input change', () => {
        const handleChange = vi.fn();
        render(
            <FormField
                type="document"
                value=""
                onChange={handleChange}
            />
        );

        const input = screen.getByPlaceholderText('30216147');
        fireEvent.change(input, { target: { value: '12345678' } });

        expect(handleChange).toHaveBeenCalledTimes(1);
    });

    it('should handle phone input change', () => {
        const handleChange = vi.fn();
        render(
            <FormField
                type="phone"
                value=""
                onChange={handleChange}
            />
        );

        const input = screen.getByPlaceholderText('5130216147');
        fireEvent.change(input, { target: { value: '987654321' } });

        expect(handleChange).toHaveBeenCalledTimes(1);
    });

    it('should display document value', () => {
        const handleChange = vi.fn();
        render(
            <FormField
                type="document"
                value="12345678"
                onChange={handleChange}
            />
        );

        expect(screen.getByDisplayValue('12345678')).toBeInTheDocument();
    });

    it('should display phone value', () => {
        const handleChange = vi.fn();
        render(
            <FormField
                type="phone"
                value="987654321"
                onChange={handleChange}
            />
        );

        expect(screen.getByDisplayValue('987654321')).toBeInTheDocument();
    });

    it('should apply custom className', () => {
        const handleChange = vi.fn();
        render(
            <FormField
                type="document"
                value=""
                onChange={handleChange}
                className="custom-field"
            />
        );

        const fieldElement = screen.getByText('DNI').closest('.form-field');
        expect(fieldElement).toHaveClass('custom-field');
    });

    it('should render dropdown icon for document field', () => {
        const handleChange = vi.fn();
        render(
            <FormField
                type="document"
                value=""
                onChange={handleChange}
            />
        );

        const icon = screen.getByAltText('dropdown');
        expect(icon).toBeInTheDocument();
    });
}); 