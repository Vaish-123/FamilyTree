namespace familyTreeApi.Dtos
{
    public class UserDto
    {
        public long Id { get; set; }

        public string UserName { get; set; }

        public string EmailAddress { get; set; }

        public string Password { get; set; }

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

        public bool HasAdminAccess { get; set; }
    }
}
