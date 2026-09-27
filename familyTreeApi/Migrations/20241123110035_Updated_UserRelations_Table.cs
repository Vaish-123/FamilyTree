using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace familyTreeApi.Migrations
{
    /// <inheritdoc />
    public partial class Updated_UserRelations_Table : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_UserRelations_Users_UserId",
                table: "UserRelations");

            migrationBuilder.AlterColumn<long>(
                name: "UserId",
                table: "UserRelations",
                type: "bigint",
                nullable: true,
                oldClrType: typeof(long),
                oldType: "bigint");

            migrationBuilder.AddColumn<long>(
                name: "RelatedUserId",
                table: "UserRelations",
                type: "bigint",
                nullable: true);

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 1L,
                column: "CreationTime",
                value: new DateTime(2024, 11, 23, 11, 0, 35, 130, DateTimeKind.Utc).AddTicks(1072));

            migrationBuilder.CreateIndex(
                name: "IX_UserRelations_RelatedUserId",
                table: "UserRelations",
                column: "RelatedUserId");

            migrationBuilder.AddForeignKey(
                name: "FK_UserRelations_Users_RelatedUserId",
                table: "UserRelations",
                column: "RelatedUserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_UserRelations_Users_UserId",
                table: "UserRelations",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.SetNull);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_UserRelations_Users_RelatedUserId",
                table: "UserRelations");

            migrationBuilder.DropForeignKey(
                name: "FK_UserRelations_Users_UserId",
                table: "UserRelations");

            migrationBuilder.DropIndex(
                name: "IX_UserRelations_RelatedUserId",
                table: "UserRelations");

            migrationBuilder.DropColumn(
                name: "RelatedUserId",
                table: "UserRelations");

            migrationBuilder.AlterColumn<long>(
                name: "UserId",
                table: "UserRelations",
                type: "bigint",
                nullable: false,
                defaultValue: 0L,
                oldClrType: typeof(long),
                oldType: "bigint",
                oldNullable: true);

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 1L,
                column: "CreationTime",
                value: new DateTime(2024, 11, 23, 10, 14, 15, 406, DateTimeKind.Utc).AddTicks(14));

            migrationBuilder.AddForeignKey(
                name: "FK_UserRelations_Users_UserId",
                table: "UserRelations",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
