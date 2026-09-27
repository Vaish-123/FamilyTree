using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace familyTreeApi.Migrations
{
    /// <inheritdoc />
    public partial class Added_UserRelations_Table : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "UserRelations",
                columns: table => new
                {
                    Id = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    IsApproved = table.Column<bool>(type: "bit", nullable: false),
                    StartDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    EndDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Order = table.Column<int>(type: "int", nullable: false),
                    UserId = table.Column<long>(type: "bigint", nullable: false),
                    RelationId = table.Column<long>(type: "bigint", nullable: false),
                    CreationTime = table.Column<DateTime>(type: "datetime2", nullable: false),
                    CreatedUserId = table.Column<long>(type: "bigint", nullable: true),
                    ModificationTime = table.Column<DateTime>(type: "datetime2", nullable: true),
                    ModifiedUserId = table.Column<long>(type: "bigint", nullable: true),
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false),
                    DeletedUserId = table.Column<long>(type: "bigint", nullable: true),
                    DeletionTime = table.Column<DateTime>(type: "datetime2", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserRelations", x => x.Id);
                    table.ForeignKey(
                        name: "FK_UserRelations_Relations_RelationId",
                        column: x => x.RelationId,
                        principalTable: "Relations",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_UserRelations_Users_CreatedUserId",
                        column: x => x.CreatedUserId,
                        principalTable: "Users",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_UserRelations_Users_DeletedUserId",
                        column: x => x.DeletedUserId,
                        principalTable: "Users",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_UserRelations_Users_ModifiedUserId",
                        column: x => x.ModifiedUserId,
                        principalTable: "Users",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_UserRelations_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 1L,
                column: "CreationTime",
                value: new DateTime(2024, 11, 23, 8, 35, 44, 549, DateTimeKind.Utc).AddTicks(653));

            migrationBuilder.CreateIndex(
                name: "IX_UserRelations_CreatedUserId",
                table: "UserRelations",
                column: "CreatedUserId");

            migrationBuilder.CreateIndex(
                name: "IX_UserRelations_DeletedUserId",
                table: "UserRelations",
                column: "DeletedUserId");

            migrationBuilder.CreateIndex(
                name: "IX_UserRelations_ModifiedUserId",
                table: "UserRelations",
                column: "ModifiedUserId");

            migrationBuilder.CreateIndex(
                name: "IX_UserRelations_RelationId",
                table: "UserRelations",
                column: "RelationId");

            migrationBuilder.CreateIndex(
                name: "IX_UserRelations_UserId",
                table: "UserRelations",
                column: "UserId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "UserRelations");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 1L,
                column: "CreationTime",
                value: new DateTime(2024, 11, 23, 8, 8, 52, 401, DateTimeKind.Utc).AddTicks(5596));
        }
    }
}
