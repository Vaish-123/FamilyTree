using familyTreeApi.Data;
using familyTreeApi.Dtos;
using familyTreeApi.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace familyTreeApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly FamilyTreeDbContext _dbContext;
        public AuthController(FamilyTreeDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginDto loginObj)
        {
            if (loginObj.UserName == null || loginObj.Password == null || !ModelState.IsValid)
            {
                return BadRequest(new { Message = "Bad Request" });
            }

            var user = await _dbContext.Users.FirstOrDefaultAsync(x => x.UserName == loginObj.UserName);
            if (user == null) return NotFound(new { Message = "User Not Found!" });
            else if (user.Password != loginObj.Password) return Unauthorized(new { Message = "Incorrect password!" });

            var token = await CreateToken(user);

            return Ok(new
            {
                Token = token,
            });
        }

        private async Task<string> CreateToken(Users user)
        {
            var jwtTokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes("your_very_long_secret_key_here_which_is_at_least_32_characters");
            var identity = new ClaimsIdentity(
            [
                new("UserName",user.UserName),
                //new(ClaimTypes.Email,user.EmailAddress),
                new("UserId",user.Id.ToString()),
                new("HasAdminAccess",user.HasAdminAccess.ToString().ToLower())
            ]);
            var credentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = identity,
                Expires = DateTime.Now.AddDays(1),
                SigningCredentials = credentials,
                IssuedAt = DateTime.UtcNow
            };
            var token = jwtTokenHandler.CreateToken(tokenDescriptor);
            return jwtTokenHandler.WriteToken(token);
        }
    }
}
