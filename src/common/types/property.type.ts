import { PropertyType } from '../enums';
import { IBase } from './base.type';

export interface IProperty extends IBase {
  title: string;
  description?: string;
  type: PropertyType;
  address?: string;
}
