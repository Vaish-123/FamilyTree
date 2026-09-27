using System.ComponentModel.DataAnnotations;

namespace familyTreeApi.Models
{
    public class Relations
    {
        [Key]
        public long Id { get; set; }

        [Required]
        public string RelationName { get; set; } = string.Empty;

        public string? DisplayName { get; set; }

        public string? Description { get; set; }

        public bool IsDeleted { get; set; } = false;
    }
}
