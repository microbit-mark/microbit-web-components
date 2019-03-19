/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';

import '@stencil/state-tunnel';
import {
  Services,
} from 'microbit-web-bluetooth';
import {
  DeviceInformation,
} from 'microbit-web-bluetooth/types/services/device-information';


export namespace Components {

  interface MicrobitCompass {
    'services': Services;
  }
  interface MicrobitCompassAttributes extends StencilHTMLAttributes {
    'services'?: Services;
  }

  interface MicrobitTemperature {
    /**
    * The text shown when disconnected
    */
    'disconnectedText': string;
    /**
    * The text shown when no temperature
    */
    'noTemperature': string;
    'services': Services;
    /**
    * The interval to check the temperature (ms)
    */
    'temperaturePeriod': number;
  }
  interface MicrobitTemperatureAttributes extends StencilHTMLAttributes {
    /**
    * The text shown when disconnected
    */
    'disconnectedText'?: string;
    /**
    * The text shown when no temperature
    */
    'noTemperature'?: string;
    'services'?: Services;
    /**
    * The interval to check the temperature (ms)
    */
    'temperaturePeriod'?: number;
  }

  interface MicrobitFirmware {
    'deviceInformation': DeviceInformation;
    /**
    * The text shown when disconnected
    */
    'disconnectedText': string;
    /**
    * The text shown when no firmware version
    */
    'noInfo': string;
  }
  interface MicrobitFirmwareAttributes extends StencilHTMLAttributes {
    'deviceInformation'?: DeviceInformation;
    /**
    * The text shown when disconnected
    */
    'disconnectedText'?: string;
    /**
    * The text shown when no firmware version
    */
    'noInfo'?: string;
  }

  interface MicrobitHardware {
    'deviceInformation': DeviceInformation;
    /**
    * The text shown when disconnected
    */
    'disconnectedText': string;
    /**
    * The text shown when no hardware version
    */
    'noInfo': string;
  }
  interface MicrobitHardwareAttributes extends StencilHTMLAttributes {
    'deviceInformation'?: DeviceInformation;
    /**
    * The text shown when disconnected
    */
    'disconnectedText'?: string;
    /**
    * The text shown when no hardware version
    */
    'noInfo'?: string;
  }

  interface MicrobitManufacturer {
    'deviceInformation': DeviceInformation;
    /**
    * The text shown when disconnected
    */
    'disconnectedText': string;
    /**
    * The text shown when no manufacturer name
    */
    'noInfo': string;
  }
  interface MicrobitManufacturerAttributes extends StencilHTMLAttributes {
    'deviceInformation'?: DeviceInformation;
    /**
    * The text shown when disconnected
    */
    'disconnectedText'?: string;
    /**
    * The text shown when no manufacturer name
    */
    'noInfo'?: string;
  }

  interface MicrobitModel {
    'deviceInformation': DeviceInformation;
    /**
    * The text shown when disconnected
    */
    'disconnectedText': string;
    /**
    * The text shown when no model number
    */
    'noInfo': string;
  }
  interface MicrobitModelAttributes extends StencilHTMLAttributes {
    'deviceInformation'?: DeviceInformation;
    /**
    * The text shown when disconnected
    */
    'disconnectedText'?: string;
    /**
    * The text shown when no model number
    */
    'noInfo'?: string;
  }

  interface MicrobitName {
    'device': BluetoothDevice;
    /**
    * The text shown when disconnected
    */
    'disconnectedText': string;
  }
  interface MicrobitNameAttributes extends StencilHTMLAttributes {
    'device'?: BluetoothDevice;
    /**
    * The text shown when disconnected
    */
    'disconnectedText'?: string;
  }

  interface MicrobitSerial {
    'deviceInformation': DeviceInformation;
    /**
    * The text shown when disconnected
    */
    'disconnectedText': string;
    /**
    * The text shown when no serial number
    */
    'noInfo': string;
  }
  interface MicrobitSerialAttributes extends StencilHTMLAttributes {
    'deviceInformation'?: DeviceInformation;
    /**
    * The text shown when disconnected
    */
    'disconnectedText'?: string;
    /**
    * The text shown when no serial number
    */
    'noInfo'?: string;
  }

  interface MicrobitText {
    /**
    * The text shown on the button
    */
    'buttonLabel': string;
    /**
    * The speed to scroll the text
    */
    'scrollDelay': number;
    'services': Services;
  }
  interface MicrobitTextAttributes extends StencilHTMLAttributes {
    /**
    * The text shown on the button
    */
    'buttonLabel'?: string;
    /**
    * The speed to scroll the text
    */
    'scrollDelay'?: number;
    'services'?: Services;
  }

  interface MicrobitApp {}
  interface MicrobitAppAttributes extends StencilHTMLAttributes {}

  interface MicrobitConnect {
    /**
    * The button label to connect
    */
    'connectLabel': string;
    'device': BluetoothDevice;
    /**
    * The button label to disconnect
    */
    'disconnectLabel': string;
    'setDevice': (device: BluetoothDevice) => void;
    'setDeviceInformation': (deviceInformation: DeviceInformation) => void;
    'setServices': (services: Services) => void;
  }
  interface MicrobitConnectAttributes extends StencilHTMLAttributes {
    /**
    * The button label to connect
    */
    'connectLabel'?: string;
    'device'?: BluetoothDevice;
    /**
    * The button label to disconnect
    */
    'disconnectLabel'?: string;
    'setDevice'?: (device: BluetoothDevice) => void;
    'setDeviceInformation'?: (deviceInformation: DeviceInformation) => void;
    'setServices'?: (services: Services) => void;
  }

  interface MicrobitStateButtonA {
    /**
    * The css class to use when long-pressed
    */
    'longPressClass': string;
    /**
    * The css class to use when released
    */
    'releaseClass': string;
    'services': Services;
    /**
    * The css class to use when short-pressed
    */
    'shortPressClass': string;
  }
  interface MicrobitStateButtonAAttributes extends StencilHTMLAttributes {
    /**
    * The css class to use when long-pressed
    */
    'longPressClass'?: string;
    /**
    * The css class to use when released
    */
    'releaseClass'?: string;
    'services'?: Services;
    /**
    * The css class to use when short-pressed
    */
    'shortPressClass'?: string;
  }

  interface MicrobitStateButtonB {
    /**
    * The css class to use when long-pressed
    */
    'longPressClass': string;
    /**
    * The css class to use when released
    */
    'releaseClass': string;
    'services': Services;
    /**
    * The css class to use when short-pressed
    */
    'shortPressClass': string;
  }
  interface MicrobitStateButtonBAttributes extends StencilHTMLAttributes {
    /**
    * The css class to use when long-pressed
    */
    'longPressClass'?: string;
    /**
    * The css class to use when released
    */
    'releaseClass'?: string;
    'services'?: Services;
    /**
    * The css class to use when short-pressed
    */
    'shortPressClass'?: string;
  }

  interface MicrobitStateConnection {
    /**
    * The css class to use when connected
    */
    'connectedClass': string;
    'device': BluetoothDevice;
    /**
    * The css class to use when disconnected
    */
    'disconnectedClass': string;
  }
  interface MicrobitStateConnectionAttributes extends StencilHTMLAttributes {
    /**
    * The css class to use when connected
    */
    'connectedClass'?: string;
    'device'?: BluetoothDevice;
    /**
    * The css class to use when disconnected
    */
    'disconnectedClass'?: string;
  }

  interface MicrobitStateMovement {
    /**
    * The frequency to read the sensor
    */
    'frequency': number;
    /**
    * The css class to use when moved
    */
    'movedClass': string;
    /**
    * The sensitivity of the sensor
    */
    'sensitivity': number;
    'services': Services;
    /**
    * The css class to use when still
    */
    'stillClass': string;
  }
  interface MicrobitStateMovementAttributes extends StencilHTMLAttributes {
    /**
    * The frequency to read the sensor
    */
    'frequency'?: number;
    /**
    * The css class to use when moved
    */
    'movedClass'?: string;
    /**
    * The sensitivity of the sensor
    */
    'sensitivity'?: number;
    'services'?: Services;
    /**
    * The css class to use when still
    */
    'stillClass'?: string;
  }
}

declare global {
  interface StencilElementInterfaces {
    'MicrobitCompass': Components.MicrobitCompass;
    'MicrobitTemperature': Components.MicrobitTemperature;
    'MicrobitFirmware': Components.MicrobitFirmware;
    'MicrobitHardware': Components.MicrobitHardware;
    'MicrobitManufacturer': Components.MicrobitManufacturer;
    'MicrobitModel': Components.MicrobitModel;
    'MicrobitName': Components.MicrobitName;
    'MicrobitSerial': Components.MicrobitSerial;
    'MicrobitText': Components.MicrobitText;
    'MicrobitApp': Components.MicrobitApp;
    'MicrobitConnect': Components.MicrobitConnect;
    'MicrobitStateButtonA': Components.MicrobitStateButtonA;
    'MicrobitStateButtonB': Components.MicrobitStateButtonB;
    'MicrobitStateConnection': Components.MicrobitStateConnection;
    'MicrobitStateMovement': Components.MicrobitStateMovement;
  }

  interface StencilIntrinsicElements {
    'microbit-compass': Components.MicrobitCompassAttributes;
    'microbit-temperature': Components.MicrobitTemperatureAttributes;
    'microbit-firmware': Components.MicrobitFirmwareAttributes;
    'microbit-hardware': Components.MicrobitHardwareAttributes;
    'microbit-manufacturer': Components.MicrobitManufacturerAttributes;
    'microbit-model': Components.MicrobitModelAttributes;
    'microbit-name': Components.MicrobitNameAttributes;
    'microbit-serial': Components.MicrobitSerialAttributes;
    'microbit-text': Components.MicrobitTextAttributes;
    'microbit-app': Components.MicrobitAppAttributes;
    'microbit-connect': Components.MicrobitConnectAttributes;
    'microbit-state-button-a': Components.MicrobitStateButtonAAttributes;
    'microbit-state-button-b': Components.MicrobitStateButtonBAttributes;
    'microbit-state-connection': Components.MicrobitStateConnectionAttributes;
    'microbit-state-movement': Components.MicrobitStateMovementAttributes;
  }


  interface HTMLMicrobitCompassElement extends Components.MicrobitCompass, HTMLStencilElement {}
  var HTMLMicrobitCompassElement: {
    prototype: HTMLMicrobitCompassElement;
    new (): HTMLMicrobitCompassElement;
  };

  interface HTMLMicrobitTemperatureElement extends Components.MicrobitTemperature, HTMLStencilElement {}
  var HTMLMicrobitTemperatureElement: {
    prototype: HTMLMicrobitTemperatureElement;
    new (): HTMLMicrobitTemperatureElement;
  };

  interface HTMLMicrobitFirmwareElement extends Components.MicrobitFirmware, HTMLStencilElement {}
  var HTMLMicrobitFirmwareElement: {
    prototype: HTMLMicrobitFirmwareElement;
    new (): HTMLMicrobitFirmwareElement;
  };

  interface HTMLMicrobitHardwareElement extends Components.MicrobitHardware, HTMLStencilElement {}
  var HTMLMicrobitHardwareElement: {
    prototype: HTMLMicrobitHardwareElement;
    new (): HTMLMicrobitHardwareElement;
  };

  interface HTMLMicrobitManufacturerElement extends Components.MicrobitManufacturer, HTMLStencilElement {}
  var HTMLMicrobitManufacturerElement: {
    prototype: HTMLMicrobitManufacturerElement;
    new (): HTMLMicrobitManufacturerElement;
  };

  interface HTMLMicrobitModelElement extends Components.MicrobitModel, HTMLStencilElement {}
  var HTMLMicrobitModelElement: {
    prototype: HTMLMicrobitModelElement;
    new (): HTMLMicrobitModelElement;
  };

  interface HTMLMicrobitNameElement extends Components.MicrobitName, HTMLStencilElement {}
  var HTMLMicrobitNameElement: {
    prototype: HTMLMicrobitNameElement;
    new (): HTMLMicrobitNameElement;
  };

  interface HTMLMicrobitSerialElement extends Components.MicrobitSerial, HTMLStencilElement {}
  var HTMLMicrobitSerialElement: {
    prototype: HTMLMicrobitSerialElement;
    new (): HTMLMicrobitSerialElement;
  };

  interface HTMLMicrobitTextElement extends Components.MicrobitText, HTMLStencilElement {}
  var HTMLMicrobitTextElement: {
    prototype: HTMLMicrobitTextElement;
    new (): HTMLMicrobitTextElement;
  };

  interface HTMLMicrobitAppElement extends Components.MicrobitApp, HTMLStencilElement {}
  var HTMLMicrobitAppElement: {
    prototype: HTMLMicrobitAppElement;
    new (): HTMLMicrobitAppElement;
  };

  interface HTMLMicrobitConnectElement extends Components.MicrobitConnect, HTMLStencilElement {}
  var HTMLMicrobitConnectElement: {
    prototype: HTMLMicrobitConnectElement;
    new (): HTMLMicrobitConnectElement;
  };

  interface HTMLMicrobitStateButtonAElement extends Components.MicrobitStateButtonA, HTMLStencilElement {}
  var HTMLMicrobitStateButtonAElement: {
    prototype: HTMLMicrobitStateButtonAElement;
    new (): HTMLMicrobitStateButtonAElement;
  };

  interface HTMLMicrobitStateButtonBElement extends Components.MicrobitStateButtonB, HTMLStencilElement {}
  var HTMLMicrobitStateButtonBElement: {
    prototype: HTMLMicrobitStateButtonBElement;
    new (): HTMLMicrobitStateButtonBElement;
  };

  interface HTMLMicrobitStateConnectionElement extends Components.MicrobitStateConnection, HTMLStencilElement {}
  var HTMLMicrobitStateConnectionElement: {
    prototype: HTMLMicrobitStateConnectionElement;
    new (): HTMLMicrobitStateConnectionElement;
  };

  interface HTMLMicrobitStateMovementElement extends Components.MicrobitStateMovement, HTMLStencilElement {}
  var HTMLMicrobitStateMovementElement: {
    prototype: HTMLMicrobitStateMovementElement;
    new (): HTMLMicrobitStateMovementElement;
  };

  interface HTMLElementTagNameMap {
    'microbit-compass': HTMLMicrobitCompassElement
    'microbit-temperature': HTMLMicrobitTemperatureElement
    'microbit-firmware': HTMLMicrobitFirmwareElement
    'microbit-hardware': HTMLMicrobitHardwareElement
    'microbit-manufacturer': HTMLMicrobitManufacturerElement
    'microbit-model': HTMLMicrobitModelElement
    'microbit-name': HTMLMicrobitNameElement
    'microbit-serial': HTMLMicrobitSerialElement
    'microbit-text': HTMLMicrobitTextElement
    'microbit-app': HTMLMicrobitAppElement
    'microbit-connect': HTMLMicrobitConnectElement
    'microbit-state-button-a': HTMLMicrobitStateButtonAElement
    'microbit-state-button-b': HTMLMicrobitStateButtonBElement
    'microbit-state-connection': HTMLMicrobitStateConnectionElement
    'microbit-state-movement': HTMLMicrobitStateMovementElement
  }

  interface ElementTagNameMap {
    'microbit-compass': HTMLMicrobitCompassElement;
    'microbit-temperature': HTMLMicrobitTemperatureElement;
    'microbit-firmware': HTMLMicrobitFirmwareElement;
    'microbit-hardware': HTMLMicrobitHardwareElement;
    'microbit-manufacturer': HTMLMicrobitManufacturerElement;
    'microbit-model': HTMLMicrobitModelElement;
    'microbit-name': HTMLMicrobitNameElement;
    'microbit-serial': HTMLMicrobitSerialElement;
    'microbit-text': HTMLMicrobitTextElement;
    'microbit-app': HTMLMicrobitAppElement;
    'microbit-connect': HTMLMicrobitConnectElement;
    'microbit-state-button-a': HTMLMicrobitStateButtonAElement;
    'microbit-state-button-b': HTMLMicrobitStateButtonBElement;
    'microbit-state-connection': HTMLMicrobitStateConnectionElement;
    'microbit-state-movement': HTMLMicrobitStateMovementElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
