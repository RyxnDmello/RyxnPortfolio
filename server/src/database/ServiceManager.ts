import serviceModel from "./models/Service";

import { IService } from "../interfaces/Contact";

export const createService = async (service: IService) => {
  const newService = new serviceModel(service);
  await newService.save();
};
