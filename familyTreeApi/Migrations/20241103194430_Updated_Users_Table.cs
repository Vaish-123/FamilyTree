using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace familyTreeApi.Migrations
{
    /// <inheritdoc />
    public partial class Updated_Users_Table : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "HasAdminAccess",
                table: "Users",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "Id", "Bio", "CreatedUserId", "CreationTime", "DateOfBirth", "DeletedUserId", "DeletionTime", "EmailAddress", "Gender", "HasAdminAccess", "ImageUrl", "IsDeleted", "Location", "ModificationTime", "ModifiedUserId", "Name", "Password", "PhoneNumber", "RelationshipStatus", "Status", "Surname", "UserName" },
                values: new object[] { 1L, null, null, new DateTime(2024, 11, 3, 19, 44, 27, 590, DateTimeKind.Utc).AddTicks(9570), null, null, null, "admin@gmail.com", null, true, null, false, null, null, null, "Admin", "Test@123", null, null, "Active", null, "admin" });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 1L);

            migrationBuilder.DropColumn(
                name: "HasAdminAccess",
                table: "Users");
        }
    }
}
