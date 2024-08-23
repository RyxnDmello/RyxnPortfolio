import { Error } from "mongoose";

import ServiceModel, { Service } from "../models/ServiceModel";

const createService = async (service: Service) => {
  const newService = new ServiceModel(service);

  try {
    const createdService = await newService.save();

    return {
      type: createdService.type,
      name: createdService.name,
      email: createdService.email,
      mobile: createdService.mobile,
      designation: createdService.designation,
      description: createdService.description,
    };
  } catch (error) {
    const validationError = error as Error.ValidationError;

    for (const key in validationError.errors) {
      if (!validationError.errors[key].message) continue;
      throw new Error(validationError.errors[key].message);
    }

    throw new Error(
      `Failed To Send ${service.type === "Comment" ? "Comment" : "Service"}`
    );
  }
};

export default createService;
