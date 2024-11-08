using System.ComponentModel.DataAnnotations;

namespace familyTreeApi.Dtos
{
    public class CreateOrEditUserDto
    {
        public long Id { get; set; }

        [Required]
        public string UserName { get; set; }

        [Required]
        public string EmailAddress { get; set; }

        [Required]
        public string Password { get; set; }

        [Required]
        public string Name { get; set; }

        public string? Surname { get; set; }

        public string? PhoneNumber { get; set; }

        public DateTime? DateOfBirth { get; set; }

        public string? Gender { get; set; }

        public string? RelationshipStatus { get; set; }

        public string? Status { get; set; }

        public string? Location { get; set; }

        public string? Bio { get; set; }

        public string? ImageUrl { get; set; }
    }
}
