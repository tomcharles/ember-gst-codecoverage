import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class DoubleFileCounter extends Component {
  @tracked value = 0;

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
}
