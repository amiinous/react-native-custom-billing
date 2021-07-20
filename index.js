const InAppBillingBridge =
  require("react-native").NativeModules.RNCustomBilling;

class InAppBilling {
  static open() {
    return InAppBillingBridge.open();
  }

  static close() {
    return InAppBillingBridge.close();
  }

  static purchase(sku, developerPayload = null, rcRequest = null) {
    return InAppBillingBridge.purchase(sku, developerPayload, rcRequest);
  }

  static consume(sku) {
    return InAppBillingBridge.consume(sku);
  }

  static loadOwnedItems() {
    return InAppBillingBridge.loadOwnedItems();
  }
}

export default InAppBilling;
