using System.ComponentModel.DataAnnotations;

namespace familyTreeApi.Models
{
    public class Users : FullAuditedEntity
    {
        [Key]
        public long Id { get; set; }

        [Required]
        public string UserName { get; set; } = string.Empty;

        [Required]
        public string EmailAddress { get; set; } = string.Empty;

        [Required]
        public string Password { get; set; } = string.Empty;

        [Required]
        public string Name { get; set; } = string.Empty;

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
