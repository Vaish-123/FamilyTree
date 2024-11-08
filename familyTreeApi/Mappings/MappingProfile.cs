using AutoMapper;
using familyTreeApi.Dtos;
using familyTreeApi.Models;

namespace familyTreeApi.Mappings
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            // Define your mappings here
            CreateMap<Users, UserDto>().ReverseMap();
            CreateMap<Users, CreateOrEditUserDto>().ReverseMap();
        }
    }
}
