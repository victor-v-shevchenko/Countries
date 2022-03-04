using System;

namespace Countries.Db.Entities
{
    public class City
    {
        public Guid Id { get; set; }
        public Guid CountryId { get; set; }
        public string Name { get; set; }
    }
}
