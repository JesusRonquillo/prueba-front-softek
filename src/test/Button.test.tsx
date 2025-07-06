import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Button } from '../components/atoms';

describe('Button Component', () => {
    it('renders button with text', () => {
        render(<Button>Click me</Button>);
        expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
    });

    it('calls onClick handler when clicked', () => {
        const handleClick = vi.fn();
        render(<Button onClick={handleClick}>Click me</Button>);

        fireEvent.click(screen.getByRole('button'));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('applies primary variant class', () => {
        render(<Button variant="primary">Primary Button</Button>);
        const button = screen.getByRole('button');
        expect(button).toHaveClass('button--primary');
    });

    it('applies secondary variant class', () => {
        render(<Button variant="secondary">Secondary Button</Button>);
        const button = screen.getByRole('button');
        expect(button).toHaveClass('button--secondary');
    });

    it('applies back variant class', () => {
        render(<Button variant="back">Back Button</Button>);
        const button = screen.getByRole('button');
        expect(button).toHaveClass('button--back');
    });

    it('applies custom className', () => {
        render(<Button className="custom-class">Custom Button</Button>);
        const button = screen.getByRole('button');
        expect(button).toHaveClass('custom-class');
    });

    it('is disabled when disabled prop is true', () => {
        render(<Button disabled>Disabled Button</Button>);
        const button = screen.getByRole('button');
        expect(button).toBeDisabled();
    });
}); 