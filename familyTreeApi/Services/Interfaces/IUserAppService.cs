using familyTreeApi.Dtos;

namespace familyTreeApi.Services.Interfaces
{
    public interface IUserAppService
    {
        Task<List<UserDto>> GetAllUsers();

        Task<long> CreateOrEditUser(CreateOrEditUserDto user);
    }
}
