import { Validators } from "../../config";
import { Category } from "../../data";
import { CreateCategoryDto, CustomError, PaginationDto } from "../../domain";


export class CategoryService {

  constructor(
    // dependencies will be injected here
  ) { }

  public async createCategory(createCategoryDto: CreateCategoryDto) {

    const existCategory = await Category.findOne({ where: { name: createCategoryDto.name } });
    if (existCategory) throw CustomError.badRequest('Category already exists');

    try {
      // create category
      const category = await Category.create(createCategoryDto);
      console.log("🚀 ~ CategoryService ~ createCategory ~ category:", category);

      if(!Validators.isValidUUID(category.id)) throw CustomError.internalServer('Error creating category - Invalid UUID');

      // save category
      await category.save();

      // return category to frontend
      // const categoryEntity = CategoryEntity.fromObject(category);
      return {
        message: 'Category created successfully',
        category: category
      }
    } catch (error) {
      console.log("🚀 ~ CategoryService ~ createCategory ~ error:", error)
      throw CustomError.internalServer('Error creating category');
    }
  }


  public async getCategories(paginationDto: PaginationDto) {

    const { page , limit} = paginationDto;

    try {

      const [totalOfCategories, categories] = await Promise.all([
        Category.count(),
        Category.findAll({     // offset y limit son las paginaciones en sequelize
          offset: (page - 1) * limit,
          limit: limit
        })
      ])

        
      return {
        total: totalOfCategories,
        page,
        limit,
        next: `/api/categories?page=${page + 1}&limit=${limit}`,
        prev: (page -1 > 0) ? `/api/categories?page=${page - 1}&limit=${limit}`: null,

        categories: categories.map(category => ({
          id: category.id,
          name: category.name,
          // availability: category.availability,
        }))
      }
      
    } catch (error) {
      console.log("🚀 ~ CategoryService ~ getCategories ~ error:", error)
      throw CustomError.internalServer('Error getting categories');
    }


  }
}