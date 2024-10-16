import {PluginFactory} from '@grnsft/if-core/interfaces';
import {PluginParams, ConfigParams} from '@grnsft/if-core/types';
import fs = require('fs');

export const HelloPlugin = PluginFactory({
  configValidation: (config: ConfigParams) => {
    // do config validation here or just pass zod schema
    console.log('HelloPlugin: configValidation');
    fs.appendFileSync('hello.log', 'entering execute.');
    return config;
  },
  inputValidation: (input: PluginParams) => {
    // do input validation here or pass zod schema
    console.log('HelloPlugin: inputValidation');
    fs.appendFileSync('hello.log', 'inputValidation.');
    return input;
  },
  implementation: async (inputs: PluginParams[], config: ConfigParams) => {
    const {helloValue} = config;
    console.log('HelloPlugin: implementation');
    fs.appendFileSync('hello.log', 'implementation.');

    return inputs.map(input => {
      // helloValue;
      console.log('HelloPlugin: implementation.return');
      console.log(helloValue);
      fs.appendFileSync('hello.log', 'return');

      return input;
    });
  },
});
