import {HelloPlugin} from '../../lib/hello-plugin';

describe('lib/hello-plugin: ', () => {
  describe('HelloPlugin(): ', () => {
    it('has metadata field.', () => {
      const pluginInstance = HelloPlugin({}, {}, {});

      expect(pluginInstance).toHaveProperty('metadata');
      expect(pluginInstance).toHaveProperty('execute');
      expect(typeof pluginInstance.execute).toBe('function');
    });

    describe('execute(): ', () => {
      it('applies logic on provided inputs array.', async () => {
        const pluginInstance = HelloPlugin({}, {}, {});
        const inputs = [{}];

        const response = await pluginInstance.execute(inputs);
        expect(response).toEqual(inputs);
      });
    });
  });
});
