import { describe, expect, test } from 'vitest';
import { formValidator } from './validator';

describe('Form validation', () => {
    test('should return an error if first name is less than 1 character long', () => {
        const errors = formValidator('', 'Doe', 30);
        expect(errors).toContain('First name has to be at least 1 characters long');
    });

    test('should return an error if last name is less than 1 character long', () => {
        const errors = formValidator('John', '', 30);
        expect(errors).toContain('Last name has to be at least 1 characters long');
    });

    test('should return an error if age is negative', () => {
        const errors = formValidator('John', 'Doe', -1);
        expect(errors).toContain('Age must be a positive number');
    });

    test('should pass if all details are correct (first name and last name are not empty, age is a positive number)', () => {
        const errors = formValidator('John', 'Doe', 30);
        expect(errors).toHaveLength(0);
    });
});