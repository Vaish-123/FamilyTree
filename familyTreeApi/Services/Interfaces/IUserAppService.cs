using familyTreeApi.Dtos;

namespace familyTreeApi.Services.Interfaces
{
    public interface IUserAppService
    {
        Task<List<UserDto>> GetAllUsers();

        Task<UserDto?> GetUserbyId(long userId);

        Task<long> CreateOrEditUser(CreateOrEditUserDto user);
    }
}
