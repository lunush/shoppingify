import { Field, ObjectType, Query, Resolver } from "type-graphql";
import { categories, items } from "../data";

@ObjectType()
class Category {
  @Field()
  id: number;
  @Field()
  name: string;
}

@ObjectType()
class Item {
  @Field()
  id: number;
  @Field()
  name: string;
  @Field()
  category: string;
}

@Resolver()
export class MainResolver {
  @Query(() => [Item])
  getItems() {
    return items;
  }

  @Query(() => [Category])
  getCategories() {
    return categories;
  }
}
