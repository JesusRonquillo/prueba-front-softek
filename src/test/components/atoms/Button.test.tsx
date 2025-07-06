import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../../../components/atoms/Button/Button';

describe('Button Component', () => {
    it('should render with default props', () => {
        render(<Button>Click me</Button>);

        const button = screen.getByRole('button', { name: 'Click me' });
        expect(button).toBeInTheDocument();
        expect(button).toHaveClass('button');
        expect(button).toHaveClass('button--primary');
    });

    it('should render with primary variant', () => {
        render(<Button variant="primary">Primary Button</Button>);

        const button = screen.getByRole('button');
        expect(button).toHaveClass('button--primary');
    });

    it('should render with secondary variant', () => {
        render(<Button variant="secondary">Secondary Button</Button>);

        const button = screen.getByRole('button');
        expect(button).toHaveClass('button--secondary');
    });

    it('should render with back variant', () => {
        render(<Button variant="back">Back Button</Button>);

        const button = screen.getByRole('button');
        expect(button).toHaveClass('button--back');
    });

    it('should handle click events', () => {
        const handleClick = vi.fn();
        render(<Button onClick={handleClick}>Click me</Button>);

        const button = screen.getByRole('button');
        fireEvent.click(button);

        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('should be disabled when disabled prop is true', () => {
        render(<Button disabled>Disabled Button</Button>);

        const button = screen.getByRole('button');
        expect(button).toBeDisabled();
    });

    it('should not call onClick when disabled', () => {
        const handleClick = vi.fn();
        render(<Button onClick={handleClick} disabled>Disabled Button</Button>);

        const button = screen.getByRole('button');
        fireEvent.click(button);

        expect(handleClick).not.toHaveBeenCalled();
    });

    it('should apply custom className', () => {
        render(<Button className="custom-class">Custom Button</Button>);

        const button = screen.getByRole('button');
        expect(button).toHaveClass('button');
        expect(button).toHaveClass('custom-class');
    });

    it('should apply custom className', () => {
        render(<Button className="custom-class">Custom Button</Button>);

        const button = screen.getByRole('button');
        expect(button).toHaveClass('button');
        expect(button).toHaveClass('custom-class');
    });

    it('should render children correctly', () => {
        render(
            <Button>
                <span>Icon</span>
                <span>Text</span>
            </Button>
        );

        expect(screen.getByText('Icon')).toBeInTheDocument();
        expect(screen.getByText('Text')).toBeInTheDocument();
    });

    it('should handle keyboard events', () => {
        const handleClick = vi.fn();
        render(<Button onClick={handleClick}>Button</Button>);

        const button = screen.getByRole('button');
        button.focus();
        fireEvent.keyDown(button, { key: 'Enter' });

        // Button should be focusable
        expect(button).toHaveFocus();
    });

    it('should render button text correctly', () => {
        render(<Button>Test Button</Button>);

        const button = screen.getByRole('button');
        expect(button).toHaveTextContent('Test Button');
    });
}); 