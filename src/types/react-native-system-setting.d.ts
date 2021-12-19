declare module 'react-native-system-setting' {
  interface Listener {}

  interface SystemSetting {
    addBluetoothListener(
      callback: (enabled: boolean) => void,
    ): Promise<Listener>;
  }

  const systemSetting: SystemSetting;

  export default systemSetting;
}
