using Microsoft.AspNetCore.Mvc;
using familyTreeApi.Dtos;
using familyTreeApi.Services.Interfaces;

namespace familyTreeApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : Controller
    {
        private readonly IUserAppService _userAppService;

        public UserController(IUserAppService userAppService)
        {
            _userAppService = userAppService;
        }

        [HttpGet("GetAllUsers")]
        public async Task<List<UserDto>> GetAllUsers()
        {
            return await _userAppService.GetAllUsers();
        }

        [HttpPost("GetUserById")]
        public async Task<UserDto?> GetUserById([FromBody] long userId)
        {
            return await _userAppService.GetUserbyId(userId);
        }

        [HttpPost("CreateOrEditUser")]
        public async Task<IActionResult> CreateOrEditUser(CreateOrEditUserDto user)
        {
            if (user == null || !ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var result = await _userAppService.CreateOrEditUser(user);

            return Ok(result);
        }

        //// GET: User
        //public async Task<IActionResult> Index()
        //{
        //    var familyTreeDbContext = _dbContext.Users.Include(u => u.CreatedUserFk).Include(u => u.DeletedUserFk).Include(u => u.ModifiedUserFk);
        //    return View(await familyTreeDbContext.ToListAsync());
        //}

        //// GET: User/Details/5
        //public async Task<IActionResult> Details(long? id)
        //{
        //    if (id == null)
        //    {
        //        return NotFound();
        //    }

        //    var users = await _dbContext.Users
        //        .Include(u => u.CreatedUserFk)
        //        .Include(u => u.DeletedUserFk)
        //        .Include(u => u.ModifiedUserFk)
        //        .FirstOrDefaultAsync(m => m.Id == id);
        //    if (users == null)
        //    {
        //        return NotFound();
        //    }

        //    return View(users);
        //}

        //// GET: User/Create
        //public IActionResult Create()
        //{
        //    ViewData["CreatedUserId"] = new SelectList(_dbContext.Users, "Id", "EmailAddress");
        //    ViewData["DeletedUserId"] = new SelectList(_dbContext.Users, "Id", "EmailAddress");
        //    ViewData["ModifiedUserId"] = new SelectList(_dbContext.Users, "Id", "EmailAddress");
        //    return View();
        //}

        //// POST: User/Create
        //// To protect from overposting attacks, enable the specific properties you want to bind to.
        //// For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        //[HttpPost]
        //[ValidateAntiForgeryToken]
        //public async Task<IActionResult> Create([Bind("Id,UserName,EmailAddress,Password,Name,Surname,PhoneNumber,DateOfBirth,Gender,RelationshipStatus,Status,Location,Bio,ImageUrl,CreationTime,CreatedUserId,ModificationTime,ModifiedUserId,IsDeleted,DeletedUserId,DeletionTime")] Users users)
        //{
        //    if (ModelState.IsValid)
        //    {
        //        _dbContext.Add(users);
        //        await _dbContext.SaveChangesAsync();
        //        return RedirectToAction(nameof(Index));
        //    }
        //    ViewData["CreatedUserId"] = new SelectList(_dbContext.Users, "Id", "EmailAddress", users.CreatedUserId);
        //    ViewData["DeletedUserId"] = new SelectList(_dbContext.Users, "Id", "EmailAddress", users.DeletedUserId);
        //    ViewData["ModifiedUserId"] = new SelectList(_dbContext.Users, "Id", "EmailAddress", users.ModifiedUserId);
        //    return View(users);
        //}

        //// GET: User/Edit/5
        //public async Task<IActionResult> Edit(long? id)
        //{
        //    if (id == null)
        //    {
        //        return NotFound();
        //    }

        //    var users = await _dbContext.Users.FindAsync(id);
        //    if (users == null)
        //    {
        //        return NotFound();
        //    }
        //    ViewData["CreatedUserId"] = new SelectList(_dbContext.Users, "Id", "EmailAddress", users.CreatedUserId);
        //    ViewData["DeletedUserId"] = new SelectList(_dbContext.Users, "Id", "EmailAddress", users.DeletedUserId);
        //    ViewData["ModifiedUserId"] = new SelectList(_dbContext.Users, "Id", "EmailAddress", users.ModifiedUserId);
        //    return View(users);
        //}

        //// POST: User/Edit/5
        //// To protect from overposting attacks, enable the specific properties you want to bind to.
        //// For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        //[HttpPost]
        //[ValidateAntiForgeryToken]
        //public async Task<IActionResult> Edit(long id, [Bind("Id,UserName,EmailAddress,Password,Name,Surname,PhoneNumber,DateOfBirth,Gender,RelationshipStatus,Status,Location,Bio,ImageUrl,CreationTime,CreatedUserId,ModificationTime,ModifiedUserId,IsDeleted,DeletedUserId,DeletionTime")] Users users)
        //{
        //    if (id != users.Id)
        //    {
        //        return NotFound();
        //    }

        //    if (ModelState.IsValid)
        //    {
        //        try
        //        {
        //            _dbContext.Update(users);
        //            await _dbContext.SaveChangesAsync();
        //        }
        //        catch (DbUpdateConcurrencyException)
        //        {
        //            if (!UsersExists(users.Id))
        //            {
        //                return NotFound();
        //            }
        //            else
        //            {
        //                throw;
        //            }
        //        }
        //        return RedirectToAction(nameof(Index));
        //    }
        //    ViewData["CreatedUserId"] = new SelectList(_dbContext.Users, "Id", "EmailAddress", users.CreatedUserId);
        //    ViewData["DeletedUserId"] = new SelectList(_dbContext.Users, "Id", "EmailAddress", users.DeletedUserId);
        //    ViewData["ModifiedUserId"] = new SelectList(_dbContext.Users, "Id", "EmailAddress", users.ModifiedUserId);
        //    return View(users);
        //}

        //// GET: User/Delete/5
        //public async Task<IActionResult> Delete(long? id)
        //{
        //    if (id == null)
        //    {
        //        return NotFound();
        //    }

        //    var users = await _dbContext.Users
        //        .Include(u => u.CreatedUserFk)
        //        .Include(u => u.DeletedUserFk)
        //        .Include(u => u.ModifiedUserFk)
        //        .FirstOrDefaultAsync(m => m.Id == id);
        //    if (users == null)
        //    {
        //        return NotFound();
        //    }

        //    return View(users);
        //}

        //// POST: User/Delete/5
        //[HttpPost, ActionName("Delete")]
        //[ValidateAntiForgeryToken]
        //public async Task<IActionResult> DeleteConfirmed(long id)
        //{
        //    var users = await _dbContext.Users.FindAsync(id);
        //    if (users != null)
        //    {
        //        _dbContext.Users.Remove(users);
        //    }

        //    await _dbContext.SaveChangesAsync();
        //    return RedirectToAction(nameof(Index));
        //}

        //private bool UsersExists(long id)
        //{
        //    return _dbContext.Users.Any(e => e.Id == id);
        //}
    }
}
