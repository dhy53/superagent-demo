import test from 'node:test'
import assert from 'node:assert/strict'
import { greeting } from '../src/greeting.js'

test('morning before noon', () => assert.equal(greeting(9), 'Good morning'))
test('noon is afternoon', () => assert.equal(greeting(12), 'Good afternoon'))
test('evening from 18', () => assert.equal(greeting(18), 'Good evening'))
