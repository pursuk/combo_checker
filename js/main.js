import {createMachine} from "./xstate.js";

const qcb = createMachine({
  id: 'qcb',
  initial: 'neutral',
  states: {
    neutral: {
      on: { dir2Event: 'dir2'}
    },
    dir2: {
      on: { DIR1: 'dir1' }
    },
    dir1: {
      on: { DIR1: 'dir4', TIMER: 'neutral' }
    },
    dir4: {
      type: 'final'
    }
  }
});
