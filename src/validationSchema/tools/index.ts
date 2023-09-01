import * as yup from 'yup';

export const toolValidationSchema = yup.object().shape({
  name: yup.string().required(),
  type: yup.string().required(),
  availability: yup.boolean().required(),
  price_per_day: yup.number().integer().required(),
  company_id: yup.string().nullable().required(),
});
