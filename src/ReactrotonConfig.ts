import Reactotron from 'reactotron-react-native';

Reactotron.configure({name: 'Knip'})
  .useReactNative({
    networking: true,
  })
  .connect();

const yeOldeConsoleLog = console.log;
console.log = (...args) => {
  yeOldeConsoleLog(...args);
  Reactotron.display({
    name: 'CONSOLE.LOG',
    value: args,
    preview:
      args.length > 0 && typeof args[0] === 'string' ? args[0] : undefined,
  });
};

export default Reactotron;
