import { UserInterface } from 'interfaces/user';
import { ToolInterface } from 'interfaces/tool';
import { OutletInterface } from 'interfaces/outlet';
import { GetQueryInterface } from 'interfaces';

export interface RentalOrderInterface {
  id?: string;
  start_date: any;
  end_date: any;
  total_price: number;
  user_id: string;
  tool_id: string;
  outlet_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  tool?: ToolInterface;
  outlet?: OutletInterface;
  _count?: {};
}

export interface RentalOrderGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  tool_id?: string;
  outlet_id?: string;
}
