import {Category} from './Category.model';
import {Catalog} from './Catalog.model';
import {Price} from './Price.model';
import {StockLevel} from './Stocklevel.model';
import {Media} from './Media.model';

export class Product{
  id: number;
  name: string;
  description: string;
  active: boolean;
  category: Category;
  catalog: Catalog;
  price: Price;
  stocklevel: StockLevel;
  media: Media;

}
