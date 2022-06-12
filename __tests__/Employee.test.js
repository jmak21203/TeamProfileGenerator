const { exportAllDeclaration } = require('@babel/types');
const { default: TestRunner } = require('jest-runner');
const Employee = require('../lib/Employee');
test('Can make Employee Object', () => {
    const example = new Employee();
    expect(typeof(example)).toBe('object'); 
})

test('Can set vio constructor', () => {
    const name = 'Jasper';
    const example = new Employee(name);
    expect(example.name).toBe(name); 
})