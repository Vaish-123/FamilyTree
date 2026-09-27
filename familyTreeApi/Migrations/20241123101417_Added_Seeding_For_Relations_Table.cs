using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace familyTreeApi.Migrations
{
    /// <inheritdoc />
    public partial class Added_Seeding_For_Relations_Table : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Relations",
                columns: new[] { "Id", "Description", "DisplayName", "IsDeleted", "RelationName" },
                values: new object[,]
                {
                    { 1L, null, "Father", false, "father" },
                    { 2L, null, "Mother", false, "mother" },
                    { 3L, null, "Sibling", false, "sibling" },
                    { 4L, null, "Child", false, "child" }
                });

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 1L,
                column: "CreationTime",
                value: new DateTime(2024, 11, 23, 10, 14, 15, 406, DateTimeKind.Utc).AddTicks(14));
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Relations",
                keyColumn: "Id",
                keyValue: 1L);

            migrationBuilder.DeleteData(
                table: "Relations",
                keyColumn: "Id",
                keyValue: 2L);

            migrationBuilder.DeleteData(
                table: "Relations",
                keyColumn: "Id",
                keyValue: 3L);

            migrationBuilder.DeleteData(
                table: "Relations",
                keyColumn: "Id",
                keyValue: 4L);

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 1L,
                column: "CreationTime",
                value: new DateTime(2024, 11, 23, 8, 35, 44, 549, DateTimeKind.Utc).AddTicks(653));
        }
    }
}
