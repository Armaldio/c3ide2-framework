import { Action, Condition, Trigger, Expression, Param } from "../c3ide.types";
import { getBehaviorInstanceClass as parent } from '../c3ide.types';

const opts = [
  'test',
  'something',
  'another',
];
class Instance extends parent() {
  constructor() {
    super();
  }

  @Condition('Is "{0}" Something')
  isEnabled(
    @Param({
      items: [
        { test: 'Test' },
        { something: 'Something' },
        { another: 'Another' },
      ]
    })
    tag: combo
  ) {
    return opts[tag] == 'something';
  }

  _release() {
    super._release();
  }

  _saveToJson() {
    return {
      // data to be saved for savegames
    };
  }

  _loadFromJson(o: string) {
    // load state for savegames
  }
}

export default Instance;