using System.ComponentModel.DataAnnotations.Schema;

namespace familyTreeApi.Models
{
    public abstract class FullAuditedEntity
    {
        public virtual DateTime CreationTime { get; set; } = DateTime.UtcNow;

        /// <summary>
        /// Creator of this entity.
        /// </summary>
        public virtual long? CreatedUserId { get; set; }

        [ForeignKey("CreatedUserId")]
        public virtual Users CreatedUserFk { get; set; }

        /// <summary>
        /// Last modification date of this entity.
        /// </summary>
        public virtual DateTime? ModificationTime { get; set; }

        /// <summary>
        /// Last modifier user of this entity.
        /// </summary>
        public virtual long? ModifiedUserId { get; set; }

        [ForeignKey("ModifiedUserId")]
        public virtual Users ModifiedUserFk { get; set; }

        /// <summary>
        /// Is this entity Deleted?
        /// </summary>
        public virtual bool IsDeleted { get; set; }

        /// <summary>
        /// Which user deleted this entity?
        /// </summary>
        public virtual long? DeletedUserId { get; set; }

        [ForeignKey("DeletedUserId")]
        public virtual Users DeletedUserFk { get; set; }

        /// <summary>
        /// Deletion time of this entity.
        /// </summary>
        public virtual DateTime? DeletionTime { get; set; }
    }
}
