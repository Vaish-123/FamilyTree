using familyTreeApi.Data;
using familyTreeApi.Services.Interfaces;
using familyTreeApi.Services;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

var _appConfiguration = builder.Configuration;            // Similar to IConfigurationRoot
//var _hostingEnvironment = builder.Environment;            // Similar to IWebHostEnvironment

// Configure CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowSpecificOrigins", policy =>
    {
        policy.WithOrigins(_appConfiguration["App:CorsOrigins"])
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

// Add services to the container.

builder.Services.AddControllers();

builder.Services.AddDbContext<FamilyTreeDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

builder.Services.AddScoped<IUserAppService, UserAppService>();
builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());        // Register AutoMapper

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.MapControllers();

app.UseHttpsRedirection();

app.UseCors("AllowSpecificOrigins");

app.UseAuthorization();

app.MapControllers();

app.Run();
