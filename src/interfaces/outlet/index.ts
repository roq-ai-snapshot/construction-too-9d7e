import { RentalOrderInterface } from 'interfaces/rental-order';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface OutletInterface {
  id?: string;
  name: string;
  address: string;
  phone: string;
  operating_hours: string;
  company_id: string;
  created_at?: any;
  updated_at?: any;
  rental_order?: RentalOrderInterface[];
  company?: CompanyInterface;
  _count?: {
    rental_order?: number;
  };
}

export interface OutletGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  address?: string;
  phone?: string;
  operating_hours?: string;
  company_id?: string;
}
