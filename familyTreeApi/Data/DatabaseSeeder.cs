using familyTreeApi.Data;
using familyTreeApi.Models;

public static class DatabaseSeeder
{
    public static void SeedData(FamilyTreeDbContext context)
    {
        SeedUsers(context);
        SeedRelations(context);
        // Add more seeding methods if needed
    }

    private static void SeedUsers(FamilyTreeDbContext context)
    {
        var adminUser = new Users
        {
            UserName = "admin",
            EmailAddress = "admin@gmail.com",
            Password = "Test@123",
            Name = "Admin",
            Status = "Active",
            HasAdminAccess = true
        };

        // Check if the record exists based on a unique column (EmailAddress)
        var existingUser = context.Users.SingleOrDefault(u => u.EmailAddress == adminUser.EmailAddress);

        if (existingUser == null)
        {
            // Insert new record
            context.Users.Add(adminUser);
        }
        else
        {
            // Update existing record (optional)
            existingUser.UserName = adminUser.UserName;
            existingUser.Password = adminUser.Password;
            existingUser.Name = adminUser.Name;
            existingUser.Status = adminUser.Status;
            existingUser.HasAdminAccess = adminUser.HasAdminAccess;
        }

        context.SaveChanges();
    }

    private static void SeedRelations(FamilyTreeDbContext context)
    {
        var relations = new List<Relations>
        {
            new() { RelationName = "father", DisplayName = "Father" },
            new() { RelationName = "mother", DisplayName = "Mother" },
            new() { RelationName = "sibling", DisplayName = "Sibling" },
            new() { RelationName = "child", DisplayName = "Child" }
        };

        foreach (var relation in relations)
        {
            // Check if the record exists based on a unique column (RelationName)
            var existingRelation = context.Relations.SingleOrDefault(r => r.RelationName == relation.RelationName);

            if (existingRelation == null)
            {
                // Insert new record
                context.Relations.Add(relation);
            }
            else
            {
                // Update existing record (optional)
                existingRelation.DisplayName = relation.DisplayName;
            }
        }

        context.SaveChanges();
    }
}
