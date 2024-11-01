using familyTreeApi.Models;
using Microsoft.EntityFrameworkCore;

namespace familyTreeApi.Data
{
    public class FamilyTreeDbContext:DbContext
    {
        public FamilyTreeDbContext(DbContextOptions<FamilyTreeDbContext> options):base(options)
        {
        }

        public DbSet<Users> Users { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            ///calls the base implementation of OnModelCreating in the parent class (usually DbContext or a custom base context).
            ///It's essential for inheriting any configuration defined in the parent class.
            base.OnModelCreating(modelBuilder);
            
            //Data Seeding, FluentApi( use it for SQL Indexing)
        }
    }
}
