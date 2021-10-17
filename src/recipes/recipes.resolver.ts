import { Resolver, Query, Args } from '@nestjs/graphql';
import { Recipe } from './recipe';
import { RecipeModel } from './recipe.model';

const recipeTable = [
  {
    id: '1',
    title: '鯖の味噌煮',
  },
  {
    id: '2',
    title: 'ミートソーススパゲティ',
  },
  {
    id: '3',
    title: '豚の生姜焼',
  },
];

@Resolver('Recipes')
export class RecipesResolver {
  @Query(returns => [Recipe])
  async recipes(): Promise<Recipe[]> {
    const object1 = new RecipeModel('string1',true,0);
    const object2 = new RecipeModel('string2',false,1);
    const object3 = new RecipeModel('string3',true,2);

    const list = [object1,object2,object3];
    console.log(list);

    const a = true;
    const b = false;
    console.log(a > b);
    console.log(a < b);

    return recipeTable;
  }
}