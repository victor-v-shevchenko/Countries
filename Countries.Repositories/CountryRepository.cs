using Countries.Db;
using Countries.Db.Entities;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace Countries.Repositories
{
    public class CountryRepository : ICountryRepository
    {
        private readonly CountriesDbContext dbContext;

        public CountryRepository(CountriesDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        public async Task<IEnumerable<Country>> GetAll(CancellationToken token)
        {
            return await this.dbContext.Countries.ToListAsync(token);
        }
    }
}
