using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace familyTreeApi.Models
{
    public class UserRelations : FullAuditedEntity
    {
        [Key]
        public long Id { get; set; }

        [Required]
        public bool IsApproved { get; set; }

        public DateTime? StartDate { get; set; }

        public DateTime? EndDate { get; set; }

        public int? Order { get; set; }

        public long? UserId { get; set; }

        [ForeignKey("UserId")]
        public Users UserFk { get; set; }

        public long? RelatedUserId { get; set; }

        [ForeignKey("RelatedUserId")]
        public Users RelatedUserFk { get; set; }

        public long RelationId { get; set; }

        [ForeignKey("RelationId")]
        public Relations RelationFk { get; set; }
    }
}
