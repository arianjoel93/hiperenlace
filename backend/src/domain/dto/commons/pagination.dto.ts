

// interface GenericObject {
//   [key: string]: any
// }



export class PaginationDto {

  private constructor(
    public readonly limit: number,
    public readonly page: number
  ) { }

  static create(page: number = 1, limit: number = 5): [string?, PaginationDto?] {

    if (isNaN(page) || isNaN(limit)) return ['page and limit must be numbers']
    
    if (page < 1 || limit <= 0) return ['page and limit must be greater than 0']



    return [undefined, new PaginationDto(limit, page)]
  }
}