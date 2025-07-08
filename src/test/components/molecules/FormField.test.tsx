import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import FormField from '../../../components/molecules/FormField/FormField';

describe('FormField Component', () => {

    describe('Document Field', () => {
        it('should render document field', () => {
            const mockOnChange = vi.fn();
            render(<FormField type="document" value="" onChange={mockOnChange} />);

            expect(screen.getByText('DNI')).toBeInTheDocument();
            expect(screen.getByText('Nro. de documento')).toBeInTheDocument();
            expect(screen.getByPlaceholderText('xxxxxxxx')).toBeInTheDocument();
        });
    });

    describe('Phone Field', () => {
        it('should render phone field', () => {
            const mockOnChange = vi.fn();
            render(<FormField type="phone" value="" onChange={mockOnChange} />);

            expect(screen.getByText('Celular')).toBeInTheDocument();
            expect(screen.getByPlaceholderText('9xxxxxxxx')).toBeInTheDocument();
        });
    });

    describe('Input Interactions', () => {
        it('should handle document input change', () => {
            const mockOnChange = vi.fn();

            render(
                <FormField
                    type="document"
                    value=""
                    onChange={mockOnChange}
                />
            );

            const input = screen.getByPlaceholderText('xxxxxxxx');
            fireEvent.change(input, { target: { value: '12345678' } });

            expect(mockOnChange).toHaveBeenCalledTimes(1);
            expect(mockOnChange).toHaveBeenCalledWith(expect.any(Object));
        });

        it('should handle phone input change', () => {
            const mockOnChange = vi.fn();

            render(
                <FormField
                    type="phone"
                    value=""
                    onChange={mockOnChange}
                />
            );

            const input = screen.getByPlaceholderText('9xxxxxxxx');
            fireEvent.change(input, { target: { value: '987654321' } });

            expect(mockOnChange).toHaveBeenCalledTimes(1);
            expect(mockOnChange).toHaveBeenCalledWith(expect.any(Object));
        });
    });

    describe('Value Display', () => {
        it('should display document value', () => {
            const mockOnChange = vi.fn();
            render(
                <FormField
                    type="document"
                    value="12345678"
                    onChange={mockOnChange}
                />
            );

            const input = screen.getByPlaceholderText('xxxxxxxx') as HTMLInputElement;
            expect(input.value).toBe('12345678');
        });

        it('should display phone value', () => {
            const mockOnChange = vi.fn();
            render(
                <FormField
                    type="phone"
                    value="987654321"
                    onChange={mockOnChange}
                />
            );

            const input = screen.getByPlaceholderText('9xxxxxxxx') as HTMLInputElement;
            expect(input.value).toBe('987654321');
        });
    });

    describe('Error Handling', () => {
        it('should render document field', () => {
            const mockOnChange = vi.fn();
            render(<FormField type="document" value="" onChange={mockOnChange} error="Error de prueba" />);

            expect(screen.getByText('DNI')).toBeInTheDocument();
            expect(screen.getByText('Nro. de documento')).toBeInTheDocument();
            expect(screen.getByPlaceholderText('xxxxxxxx')).toBeInTheDocument();
        });

        it('should render phone field', () => {
            const mockOnChange = vi.fn();
            render(<FormField type="phone" value="" onChange={mockOnChange} error="Error de prueba" />);

            expect(screen.getByText('Celular')).toBeInTheDocument();
            expect(screen.getByPlaceholderText('9xxxxxxxx')).toBeInTheDocument();
        });

        it('should handle document input change', () => {
            const mockOnChange = vi.fn();

            render(
                <FormField
                    type="document"
                    value=""
                    onChange={mockOnChange}
                    error="Error de prueba"
                />
            );

            const input = screen.getByPlaceholderText('xxxxxxxx');
            fireEvent.change(input, { target: { value: '12345678' } });

            expect(mockOnChange).toHaveBeenCalledTimes(1);
            expect(mockOnChange).toHaveBeenCalledWith(expect.any(Object));
        });

        it('should handle phone input change', () => {
            const mockOnChange = vi.fn();

            render(
                <FormField
                    type="phone"
                    value=""
                    onChange={mockOnChange}
                    error="Error de prueba"
                />
            );

            const input = screen.getByPlaceholderText('9xxxxxxxx');
            fireEvent.change(input, { target: { value: '987654321' } });

            expect(mockOnChange).toHaveBeenCalledTimes(1);
            expect(mockOnChange).toHaveBeenCalledWith(expect.any(Object));
        });

        it('should display document value', () => {
            const mockOnChange = vi.fn();
            render(
                <FormField
                    type="document"
                    value="12345678"
                    onChange={mockOnChange}
                    error="Error de prueba"
                />
            );

            const input = screen.getByPlaceholderText('xxxxxxxx') as HTMLInputElement;
            expect(input.value).toBe('12345678');
        });

        it('should display phone value', () => {
            const mockOnChange = vi.fn();
            render(
                <FormField
                    type="phone"
                    value="987654321"
                    onChange={mockOnChange}
                    error="Error de prueba"
                />
            );

            const input = screen.getByPlaceholderText('9xxxxxxxx') as HTMLInputElement;
            expect(input.value).toBe('987654321');
        });
    });

    describe('CSS Classes', () => {
        it('should apply custom className', () => {
            const mockOnChange = vi.fn();
            const { container } = render(
                <FormField
                    type="document"
                    value=""
                    onChange={mockOnChange}
                    className="custom-class"
                />
            );

            expect(container.querySelector('.form-field-wrapper.custom-class')).toBeInTheDocument();
        });

        it('should render dropdown icon for document field', () => {
            const mockOnChange = vi.fn();
            render(<FormField type="document" value="" onChange={mockOnChange} />);

            const dropdown = screen.getByAltText('dropdown');
            expect(dropdown).toBeInTheDocument();
        });
    });
}); 