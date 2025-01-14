import { on } from '@ember/modifier';
import { action } from '@ember/object';
import { eq } from 'ember-truth-helpers';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class SingleFileCounter extends Component {

  @tracked value: number = 0;

  get state() {
    if (this.value < 0) {
      return 'negative';
    }

    if (this.value === 0) {
      return 'neutral';
    }

    return 'positive';
  }


  @action increment() {
    this.value++;
  }

  @action decrement() {
    this.value--;
  }

  <template>
    <div>
      <h1 data-test-counter>
        {{this.value}}

        {{#if (eq this.state 'negative')}}
          (negative)
        {{/if}}
      </h1>

      <button {{on "click" this.increment}} data-test-increment>Increment</button>
      <button {{on "click" this.decrement}} data-test-decrement>Decrement</button>
    </div>
  </template>
}
