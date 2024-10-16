import {PluginFactory} from '@grnsft/if-core/interfaces';
import {PluginParams, ConfigParams} from '@grnsft/if-core/types';

export const HelloPlugin = PluginFactory({
  configValidation: (config: ConfigParams) => {
    // do config validation here or just pass zod schema
    console.log('HelloPlugin: configValidation');
    return config;
  },
  inputValidation: (input: PluginParams) => {
    // do input validation here or pass zod schema
    console.log('HelloPlugin: inputValidation');
    return input;
  },
  implementation: async (inputs: PluginParams[], config: ConfigParams) => {
    const {helloValue} = config;
    console.log('HelloPlugin: implementation');

    return inputs.map(input => {
      // helloValue;
      console.log('HelloPlugin: implementation.return');
      console.log(helloValue);

      return input;
    });
  },
});
