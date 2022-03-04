using Countries.Db.Entities;
using Microsoft.EntityFrameworkCore;

namespace Countries.Db
{
    public class CountriesDbContext : DbContext
    {
        public CountriesDbContext(DbContextOptions<CountriesDbContext> options)
            : base(options)
        {
        }

        public DbSet<Country> Countries { get; set; }
        public DbSet<City> Cities { get; set; }
    }
}
