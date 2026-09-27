using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace familyTreeApi.Migrations
{
    /// <inheritdoc />
    public partial class Added_Relations_Table : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Relations",
                columns: table => new
                {
                    Id = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    RelationName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    DisplayName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Relations", x => x.Id);
                });

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 1L,
                column: "CreationTime",
                value: new DateTime(2024, 11, 23, 8, 8, 52, 401, DateTimeKind.Utc).AddTicks(5596));
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Relations");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 1L,
                column: "CreationTime",
                value: new DateTime(2024, 11, 3, 19, 44, 27, 590, DateTimeKind.Utc).AddTicks(9570));
        }
    }
}
