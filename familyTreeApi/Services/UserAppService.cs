using AutoMapper;
using familyTreeApi.Data;
using familyTreeApi.Dtos;
using familyTreeApi.Models;
using familyTreeApi.Services.Interfaces;

namespace familyTreeApi.Services
{
    public class UserAppService : IUserAppService
    {
        private readonly FamilyTreeDbContext _dbContext;
        private readonly IMapper _mapper;

        public UserAppService(
            FamilyTreeDbContext dbContext,
            IMapper mapper)
        {
            _dbContext = dbContext;
            _mapper = mapper;
        }

        public async Task<List<UserDto>> GetAllUsers()
        {
            List<UserDto> result = new();

            var users = _dbContext.Users;

            foreach (var user in users)
            {
                var mappedUser = _mapper.Map<UserDto>(user);

                result.Add(mappedUser);
            }

            return result;
        }

        public async Task<UserDto?> GetUserbyId(long userId)
        {
            var user = await _dbContext.Users.FindAsync(userId);
            if (user != null)
            {
                return _mapper.Map<UserDto>(user);
            }
            else return null;
        }

        public async Task<long> CreateOrEditUser(CreateOrEditUserDto user)
        {
            try
            {
                long id;
                var _user = _mapper.Map<Users>(user);
                if (_user.Id == 0)
                {
                    id = await Create(_user);
                }
                else
                {
                    id = await Update(_user);
                }

                return id;
            }
            catch (Exception ex)
            {
                throw new Exception("An error occurred while creating or editing the user.", ex);
            }
        }

        private async Task<long> Create(Users user)
        {
            await _dbContext.Users.AddAsync(user);
            await _dbContext.SaveChangesAsync();

            return user.Id;
        }

        private async Task<long> Update(Users user)
        {
            _dbContext.Users.Update(user);
            await _dbContext.SaveChangesAsync();

            return user.Id;
        }

    }
}
