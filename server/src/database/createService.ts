import { Error } from "mongoose";

import ServiceModel, { Service } from "../models/ServiceModel";

const createService = async (service: Service) => {
  const newService = new ServiceModel(service);

  if (service.mobile && service.mobile < 6000000000) {
    throw new Error(
      "Mobile Number Must Be 10 Digits and Starts With 6, 7, 8, or 9"
    );
  }

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
      `Failed To ${
        service.type === "Comment" ? "Send Comment" : "Request Service"
      }`
    );
  }
};

export default createService;
