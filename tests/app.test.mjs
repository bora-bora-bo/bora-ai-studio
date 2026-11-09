import test from 'node:test';
import assert from 'node:assert/strict';
import { greeting } from '../src/app.js';

test('default greeting', () => assert.equal(greeting(), 'Bora AI Studio 준비 완료!'));
test('custom greeting', () => assert.equal(greeting('게임'), '게임 준비 완료!'));
