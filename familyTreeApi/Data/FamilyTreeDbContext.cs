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

        public DbSet<Relations> Relations { get; set; }

        public DbSet<UserRelations> UserRelations { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            ///calls the base implementation of OnModelCreating in the parent class (usually DbContext or a custom base context).
            ///It's essential for inheriting any configuration defined in the parent class.
            base.OnModelCreating(modelBuilder);

            //Data Seeding, FluentApi( use it for SQL Indexing)
            modelBuilder.Entity<Users>().HasData(
                new Users() { Id = 1, UserName = "admin", EmailAddress = "admin@gmail.com", Password = "Test@123", Name = "Admin", Status = "Active", HasAdminAccess = true }
            );

            modelBuilder.Entity<Relations>().HasData(
                new Relations() { Id = 1, RelationName = "father", DisplayName = "Father" },
                new Relations() { Id = 2, RelationName = "mother", DisplayName = "Mother" },
                new Relations() { Id = 3, RelationName = "sibling", DisplayName = "Sibling" },
                new Relations() { Id = 4, RelationName = "child", DisplayName = "Child" }
            );


            modelBuilder.Entity<UserRelations>()
                .HasOne(ur => ur.UserFk)
                .WithMany()
                .HasForeignKey(ur => ur.UserId)
                .OnDelete(DeleteBehavior.SetNull);  // Set UserId to NULL on delete

            modelBuilder.Entity<UserRelations>()
                .HasOne(ur => ur.RelatedUserFk)
                .WithMany()
                .HasForeignKey(ur => ur.RelatedUserId)
                .OnDelete(DeleteBehavior.Restrict);  // Prevent cascading delete for RelatedUserId

        }
    }
}
