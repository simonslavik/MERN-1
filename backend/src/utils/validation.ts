import joi from 'joi';


export const validateRegistration = (data: any) => {

    const registerSchema = joi.object({
     username: joi.string().alphanum().min(3).max(30).required(),
     password: joi.string().min(6).required(),
     email: joi.string().email().required(),
    role: joi.string().valid('user', 'admin').default('user'),
   });

  return registerSchema.validate(data);
}

export const validateLogin = (data: any) => {
    const loginSchema = joi.object({
     email: joi.string().email().required(),
     password: joi.string().min(6).required(),
    });

  return loginSchema.validate(data);
}


export const validateProduct = (data: any) => {
    const productSchema = joi.object({
     name: joi.string().required(),
     price: joi.number().positive().required(),
     description: joi.string().required(),
     imageUrl: joi.string().uri(),
     inStock: joi.boolean(),
   
   });
  return productSchema.validate(data);
}   

