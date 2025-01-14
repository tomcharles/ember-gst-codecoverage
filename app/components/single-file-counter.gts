import { on } from '@ember/modifier';
import { action } from '@ember/object';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class SingleFileCounter extends Component {

  @tracked value: number = 0;

  @action increment() {
    this.value++;
  }

  @action decrement() {
    this.value--;
  }

  <template>
    <div>
      <h1 data-test-counter>{{this.value}}</h1>
      <button {{on "click" this.increment}} data-test-increment>Increment</button>
      <button {{on "click" this.decrement}} data-test-decrement>Decrement</button>
    </div>
  </template>
}
