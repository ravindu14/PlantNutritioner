import {
  registerGlobalServices,
  serviceManager,
} from "shared/services/manager";
import { AuthService } from "./authService";
import { StorageService } from "./storageService";
import { DeficiencyService } from "./deficiencyService";
import { ProductService } from "./productService";

export const registerServices = (options) => {
  registerGlobalServices(options);

  serviceManager.register("AuthService", (serviceManager) => {
    let api = serviceManager.get("ApiService");
    return new AuthService(api);
  });

  serviceManager.register("StorageService", (serviceManager) => {
    let api = serviceManager.get("ApiService");
    return new StorageService(api);
  });

  serviceManager.register("DeficiencyService", (serviceManager) => {
    let api = serviceManager.get("ApiService");
    return new DeficiencyService(api);
  });

  serviceManager.register("ProductService", (serviceManager) => {
    let api = serviceManager.get("ApiService");
    return new ProductService(api);
  });
};
export { serviceManager };
