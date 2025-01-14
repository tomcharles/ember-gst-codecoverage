import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | single-file-counter', function (hooks) {
  setupRenderingTest(hooks);

  test('it can increment and decrement', async function (assert) {
    await render(hbs`<SingleFileCounter />`);

    assert.dom('[data-test-counter]').hasText('0', 'has correct initial value');

    await click('[data-test-increment]');

    assert
      .dom('[data-test-counter]')
      .hasText('1', 'has correct incremented value');

    await click('[data-test-decrement]');

    assert
      .dom('[data-test-counter]')
      .hasText('0', 'has correct decremented value');
  });
});