using familyTreeApi.Dtos;
using familyTreeApi.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace familyTreeApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserRelationsController : ControllerBase
    {
        private readonly IUserRelationsAppService _userRelationsAppService;

        public UserRelationsController(IUserRelationsAppService userRelationsAppService)
        {
            _userRelationsAppService = userRelationsAppService;
        }

        [HttpGet("GetAllRelations")]
        public async Task<List<RelationsDto>> GetAllRelations()
        {
            return await _userRelationsAppService.GetAllRelations();
        }

        [HttpPost("CreateOrEditRelation")]
        public async Task<IActionResult> CreateOrEditRelation(UserRelationsDto item)
        {
            await _userRelationsAppService.CreateOrEditRelation(item);
            return Ok();
        }

    }
}
