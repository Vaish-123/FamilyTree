using AutoMapper;
using familyTreeApi.Data;
using familyTreeApi.Dtos;
using familyTreeApi.Models;
using familyTreeApi.Services.Interfaces;

namespace familyTreeApi.Services
{
    public class UserRelationsAppService : IUserRelationsAppService
    {
        private readonly FamilyTreeDbContext _dbContext;
        private readonly IMapper _mapper;

        public UserRelationsAppService(
            FamilyTreeDbContext dbContext,
            IMapper mapper)
        {
            _dbContext = dbContext;
            _mapper = mapper;
        }

        public async Task<List<RelationsDto>> GetAllRelations()
        {
            try
            {
                List<RelationsDto> result = [];

                var relations = _dbContext.Relations;

                foreach (var relation in relations)
                {
                    var mappedRelation = _mapper.Map<RelationsDto>(relation);

                    result.Add(mappedRelation);
                }

                return result;
            }
            catch (Exception ex)
            {

                throw;
            }
        }

        public async Task CreateOrEditRelation(UserRelationsDto item)
        {
            await CreateRelation(item);
        }

        private async Task CreateRelation(UserRelationsDto item)
        {
            var newUserRelation = _mapper.Map<UserRelations>(item);
            item.IsApproved = true;

            await _dbContext.UserRelations.AddAsync(newUserRelation);
            await _dbContext.SaveChangesAsync();
        }

    }
}
