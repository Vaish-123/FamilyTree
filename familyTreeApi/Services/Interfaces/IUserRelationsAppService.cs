using familyTreeApi.Dtos;

namespace familyTreeApi.Services.Interfaces
{
    public interface IUserRelationsAppService
    {
        Task<List<RelationsDto>> GetAllRelations();

        Task CreateOrEditRelation(UserRelationsDto item);
    }
}
